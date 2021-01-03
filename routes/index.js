const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome Mahbub to ACC Assignment 02');
});

module.exports = router;
