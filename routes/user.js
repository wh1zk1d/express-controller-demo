const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user.controller')

// Routes
router.get('/', UserController.getAll)
router.get('/:id', UserController.findOne)

module.exports = router
