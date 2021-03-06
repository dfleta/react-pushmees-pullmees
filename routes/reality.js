/**
 * Box Routes
 */

var express = require('express');
var router = express.Router();

// Controller module includes callbacks functions
var realityController = require('../controllers/realityController');

// ROUTER LEVEL MIDDLEWARE

router.use(function (req, res, next) {
    console.log(req.url);
    console.log(req.body);

    next();
  })

/**
 * Reality routes
 */

// get all meeseeks alive, get /reality
router.get('/', realityController.realityAPI.getReality);

// delete all, get /reality/delete
router.get('/delete', realityController.realityAPI.deleteReality);

// explode meeseeks by id  /reality/explode/:id
router.get('/explode/:id', realityController.realityAPI.explode);

// get one meeseks
router.get('/getMeeseeks/:position', realityController.realityAPI.getMeeseeks);

module.exports = router;