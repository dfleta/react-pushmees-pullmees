/**
 * Modelo de la coleccion boxes
 * de la bbdd MongoDB
 * 
 * Box contiene una referencia
 * al modelo Meeseeks
 */

//Require Mongoose

var mongoose = require('mongoose');
var Meeseeks = require('./meeseeks');

//Definir el schema

var Schema = mongoose.Schema;

var boxSchema = new Schema(
    {
        name: String,
        // referencia al modelo Meeseeks, no a su schema
        mrMeeseeks: {type: Schema.Types.ObjectId, ref: Meeseeks.name}      
    }
);

module.exports = mongoose.model('Boxes', boxSchema);