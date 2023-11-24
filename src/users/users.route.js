const express = require('express')
const router = express.Router()

const { findAll, findOne, createUser, updateUser, deleteUser } = require('./users.controller')

router.get('/', findAll)
router.get('/:id', findOne)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router