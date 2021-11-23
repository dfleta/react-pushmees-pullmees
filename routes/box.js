
var express = require('express');
var router = express.Router();

// Require controller modules
var boxController = require('../controllers/boxController');

// Box routes

router.get('/', boxController.factory);

module.exports = router;