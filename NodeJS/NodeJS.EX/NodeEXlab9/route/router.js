const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js')

router.get('/', controller.getData)

router.post('/', controller.createData)

router.put('/:id', controller.updateData)

router.delete('/:id', controller.deleteData)

module.exports = router ;