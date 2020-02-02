const express = require('express');

const ProjectController = require('./controllers/ProjectController');

const routes = express.Router();


routes.post('/projects', ProjectController.store);
routes.get('/projects', ProjectController.index);
routes.put('/projects/:id', ProjectController.update);


module.exports = routes;

