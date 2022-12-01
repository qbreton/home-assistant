const request = require('request');
const Task = require('../../db/models/Task');

exports.list = async (req, res) => {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
}

exports.create = async(req, res) => {
    const task = {
        ...req.body
    };

    Task.create(task)
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