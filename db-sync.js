require('dotenv').config();

const sequelize = require('./src/db/config');

const Plant = require('./src/db/models/Plant');

sequelize.sync();