const express = require('express');
const router = express.Router();

const test = require('../assets/json/test.json')
/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send(test);
});

module.exports = router;
