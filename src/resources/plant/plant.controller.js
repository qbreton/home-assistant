const request = require('request');
const Plant = require('../../db/models/Plant');

exports.list = async (req, res) => {
    const plants = await Plant.findAll();
    res.status(200).json(plants);
}

exports.create = async(req, res) => {
    const plant = {
        ...req.body
    };

    Plant.create(plant)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the plant."
            });
        });
}