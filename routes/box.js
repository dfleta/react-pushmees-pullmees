/**
 * Box Routes
 */
var express = require('express');
var router = express.Router();

// Controller module includes callbacks functions
var boxController = require('../controllers/boxController');

// ROUTER LEVEL MIDDLEWARE

router.use(function (req, res, next) {
    console.log(req.url);
    console.log(req.body);

    next();
  })

/**
 * Box routes
 * 
 * No es necesario añadir /box a las rutas
 * pues en app especificamos la ruta /box
 * en el middleware use().
 */


// factory es la callback function del controller
// Encapsulamos las callbacks functions en el modulo controller
router.get('/', boxController.boxAPI.factory);

// create meeseeks
router.get('/pressButton', boxController.boxAPI.createMeeseeks);

// get one
router.get('/getMeeseeks/:position', boxController.boxAPI.getMeeseeks);

// create box
router.get('/factory', boxController.boxAPI.factory);

// delete boxes
router.get('/delete', boxController.boxAPI.deleteBox);

module.exports = router;