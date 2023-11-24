const { Sequelize } = require('sequelize');
const envs = require('../enviroment/enviroments')

const sequelize = new Sequelize(envs.DB_URI, {
    logging: false
})

const authenticated = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connection has been established successfully.")
    } catch (error) {
        console.log(error)
    }
}

const syncUp = async () => {
    try {
        await sequelize.sync({ force: true })
        console.log("Connection has been synced succesfully.")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    authenticated,
    syncUp,
    sequelize
}