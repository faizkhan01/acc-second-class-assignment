const express = require('express');
const router = express.Router();
const areaController = require('../Controllers/Area.controller');

router.post('/postArea', areaController.postData);
router.get('/getAllData', areaController.getAllData);
router.get('/getById', areaController.getById);
router.patch('/patchById', areaController.patchById);
router.put('/putById', areaController.putById);
router.delete('/deleteById', areaController.deleteById);

module.exports = router;