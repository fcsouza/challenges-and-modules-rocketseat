import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymenController from './app/controllers/DeliverymenController';
import SignatureController from './app/controllers/SignatureController';
import OrderController from './app/controllers/OrderController';

import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';
import validateSessionStore from './app/validators/SessionStore';
import validateRecipientStore from './app/validators/RecipientStore';
import validateRecipientUpdate from './app/validators/RecipientUpdate';
import validateDeliverymanStore from './app/validators/DeliverymanStore';
import validateDeliverymanUpdate from './app/validators/DeliverymanUpdate';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.post('/sessions', validateSessionStore, SessionController.store);
routes.get('/deliverymen', DeliverymenController.index);
routes.get('/deliverymen/:id/deliveries', DeliverymenController.show);
routes.put(
  '/deliverymen/:idDeliveryman/orders/:idOrder/status',
  validateOrderStatusUpdate,
  OrderStatusController.update
);
routes.get('/delivery/:id/problems', DeliveryProblemsController.show);
routes.post(
  '/delivery/:id/problems',
  validateDeliveryProblemsStore,
  DeliveryProblemsController.store
);
routes.post(
  '/signatures',
  upload.single('signatures'),
  SignatureController.store
);

routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

export default routes;
