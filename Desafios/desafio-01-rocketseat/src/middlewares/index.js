const Project = require('../models/Project');

function checkProjectExist (req, res, next) {
  const { id } = req.params;
  const finding = Project.find(element => element.id == id);

  if (!finding){
    return res.status(400).json({ error : 'Project does not exist' });
  }
  next();
}

function logMiddleware(req, res, next) {
  console.count('Requisições');
  next();
}

function checkProjectId(req, res, next) {
  const { id } = req.body;
  const finding = Project.find(element => element.id == id);

  if (finding){
    return res.status(400).json({ error : 'Project already exist' });
  }
  next();
}

module.exports = {
  checkProjectExist,
  logMiddleware,
  checkProjectId
}