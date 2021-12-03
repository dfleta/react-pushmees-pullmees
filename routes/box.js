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
// create box
router.get('/factory/:owner', boxController.boxAPI.factory);

// create meeseeks
router.get('/pressButton', boxController.boxAPI.createMeeseeks);

// get one meeseks
router.get('/getMeeseeks/:position', boxController.boxAPI.getMeeseeks);

// get owner box
router.get('/:owner', boxController.boxAPI.getBox);

// delete owner box
router.get('/delete/:owner', boxController.boxAPI.deleteBox);

// get all boxes
router.get('/', boxController.boxAPI.getAllBoxes);


module.exports = router;