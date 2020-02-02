const Project = require('../models/Project');

module.exports = {
  async store (req, res) {
    const { id } = req.params;
    const { title } = req.body;
    const finding = Project.find(element => element.id == id);

    finding.tasks.push(title);

    return res.json(Project);
  }
}