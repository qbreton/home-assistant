require('dotenv').config();

const sequelize = require('./src/db/config');

const Plant = require('./src/db/models/Plant');
const Task = require('./src/db/models/Task');

sequelize.sync({ force: true});