const Project = require('../models/Project');

module.exports = {
  async index (req, res) {

    return res.json(Project);
  },

  async store (req, res) {

    const id = req.body.id;
    const title = req.body.title
    const tasks = [];

    Project.push({id, title, tasks });

    return res.json(Project);
  },

  async update (req, res) {
    const id = req.params.id;
    const title =req.body.title;

    const finding = Project.find(element => element.id === id);
    finding.title = title;

    return res.json(Project);


  },


};