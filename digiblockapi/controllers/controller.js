const { Project } = require("../models/schema");

const admins = async(req, res) => {
    const admin = await Project.find();
    res.json(admin);
};

module.exports = { admins };