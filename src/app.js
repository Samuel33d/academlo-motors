const express = require('express');
const app = express();
const usersRouter = require('./users/users.route')
const repairsRouter = require('./repairs/repairs.route')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/repairs', repairsRouter)


module.exports = app

