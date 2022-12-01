const express = require("express");
require('dotenv').config();

// Controllers
const plantController = require("./src/resources/plant/plant.controller");
const taskController = require("./src/resources/task/task.controller");

const app = express();

app.use(express.json());

app.get("/plant", plantController.list);

app.post("/plant", plantController.create);

app.get("/task", taskController.list);

app.post("/task", taskController.create);

module.exports = app;