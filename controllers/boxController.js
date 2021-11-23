
const importaBox = require('../domain/box');

const factoriaBox = importaBox.singletonBox;
var box = factoriaBox.getBox();

// get a meeseeks box

const factory = function(req, res) {
    // res.send('NOT IMPLEMENTED: Meeseeks Box');
    res.status(200).type('json').json(box);
};

exports.factory = factory;