const Project = require('../models/Project');

module.exports = {
  async index (req, res) {

    return res.json(Project);
  },

  async show (req, res) {
    const { id } = req.params;

    const finding = Project.find(element => element.id == id);

    return res.json(finding);
  },

  async store (req, res) {
    const { id } = req.body;
    const { title } = req.body;
    const tasks = [];

    Project.push({id, title, tasks });

    return res.json(Project);
  },

  async update (req, res) {
    const { id } = req.params;
    const { title } =req.body;

    const finding = Project.find(element => element.id == id);
    finding.title = title;

    return res.json(Project);
  },

  async destroy (req, res) {
    const { id } = req.params;
    const finding = Project.findIndex(element => element.id == id);
    
    Project.splice(finding, 1);

    return res.json();

  }


};