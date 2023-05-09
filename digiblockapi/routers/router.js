const express = require("express");
const { admins } = require("../controllers/controller");



const routerindex = express.Router();
routerindex.route("/view").get(admins);

module.exports = routerindex;