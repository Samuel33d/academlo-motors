const express = require('express')
const router = express.Router()

const { findAll, findOne, createRepair, updateRepair, deleteRepair } = require('./repairs.controller')

router.get('/', findAll)
router.get('/:id', findOne)
router.post('/', createRepair)
router.patch('/:id', updateRepair)
router.delete('/:id', deleteRepair)

module.exports = router