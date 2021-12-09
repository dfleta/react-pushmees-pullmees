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

// Middleware post con hook findOneAndDelete
// que permite el acceso al documento
// que devuelve la query del Model
// this depende de si usas funciones de documento
// o funciones query
boxSchema.post("findOneAndDelete", (document) => {
    Meeseeks.findByIdAndDelete(document.mrMeeseeks)
                .exec(function (err, mees) {
                    if (err) { return next(err); }
                    console.log("POST!!! = " + mees._id.toString());
                })
  });

boxSchema.pre(['find', 'findOne'], function() {
    // this instanceof mongoose.Query
    // this se refiere a la query, no al documento, en este caso.
    // Sirvo box sin la propiedad _v o version de documento 
    // que genera monggose
    this.select('_id name mrMeeseeks');

    // next() es opcional
  });

// El middleware pre /post ha de incluirse en el schema 
// antes de compilarlo en el modelo
// Una vez ejecutado require no puede incluirse en el modelo
module.exports = mongoose.model('Boxes', boxSchema);