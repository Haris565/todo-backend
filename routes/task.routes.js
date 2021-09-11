const router = require('express').Router()
const taskController = require('../Controllers/task.controller')


router.post("/createTask", taskController.createTask)


module.exports = router;