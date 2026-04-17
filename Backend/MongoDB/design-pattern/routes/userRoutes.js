const userController = require('../controller/userController')
const express = require('express')
const router = express.Router()

router.post("/create", userController.createUser)
router.get("/get", userController.getUsers)

module.exports = router