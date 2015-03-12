var express = require('express');
var router = express.Router();
var Controller = require("../controller");

router.get('/', function(req, res, next) {
  Controller.renderList(req, res);
});

module.exports = router;
