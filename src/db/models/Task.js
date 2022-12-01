const { DataTypes, Model} = require('sequelize')
const sequelize = require('../config')

class Task extends Model {}

Task.entityTypes = ['plant'];
Task.taskTypes = ['watering', 'potting'];

Task.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    entityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    entityType: {
        type: DataTypes.ENUM(Task.entityTypes),
        allowNull: false
    },
    taskType: {
        type: DataTypes.ENUM(Task.taskTypes)
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Task'
})


module.exports = Task;