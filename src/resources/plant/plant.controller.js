const request = require('request');
const Plant = require('../../db/models/Plant');

exports.list = async (req, res) => {
    const plants = await Plant.findAll();
    res.status(200).json(plants);
}