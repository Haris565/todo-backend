const router = require('express').Router()
const columnController = require('../Controllers/column.controller')


router.post("/createColumn", columnController.createColumn)
router.get("/getColumn", columnController.getColumn )


module.exports = router;