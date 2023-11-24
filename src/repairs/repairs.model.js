const { DataTypes } = require('sequelize')
const { sequelize } = require('./../config/database/database')
// const User = require('.././users/users.model')

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
    }
})

// User.hasMany(Repairs, {foreignKey: 'userId'})
// Repairs.belongsTo(User, {foreignKey: 'userId'})

module.exports = Repairs