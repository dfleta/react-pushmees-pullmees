var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'pushmees pullmees', pressButton: "pressButton trae un meeseeks a la existencia al DOM y a MongoAtlas", onClick: 'evento onClic sobre mr meeseeks se lo lleva del DOM y de la base de datos'});
});

module.exports = router;