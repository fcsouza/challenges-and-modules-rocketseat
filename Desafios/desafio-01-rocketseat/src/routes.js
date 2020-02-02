const express = require('express');

const ProjectController = require('./controllers/ProjectController');
const TaskController = require('./controllers/TaskController');

const { checkProjectExist, checkProjectId } = require('./middlewares/index');

const routes = express.Router();

routes.post('/projects',checkProjectId, ProjectController.store);
routes.get('/projects', ProjectController.index);
routes.get('/projects/:id', checkProjectExist, ProjectController.show);
routes.put('/projects/:id',checkProjectExist, ProjectController.update);
routes.delete('/projects/:id', checkProjectExist, ProjectController.destroy);

routes.post('/projects/:id/tasks', checkProjectExist, TaskController.store);

module.exports = routes;