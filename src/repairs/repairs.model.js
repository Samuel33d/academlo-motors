const { DataTypes } = require('sequelize')
const { sequelize } = require('./../config/database/database')


const Repairs = sequelize.define('repairs', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
        defaultValue: 'pending'
    },
    userId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: true,
    }
})

module.exports = Repairs