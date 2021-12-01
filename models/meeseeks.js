/**
 * Modelo de la coleccion Meeseeks
 * de la bbdd MongoDB
 */

//Require Mongoose

var mongoose = require('mongoose');

//Definir el schema

var Schema = mongoose.Schema;

var meeseeksSchema = new Schema(
    {
        messageOnCreate: {
                            type: String,
                            required: true,
                            maxlength: 200
                        },
        messageOnRequest: [String]
    }
);

// Export function para crear la clase modelo Meeseek
// El primer argumento de mongoose.model() 
// determina el nombre de la colección en la bbdd MongoDB 

module.exports = mongoose.model('Meeseeks', meeseeksSchema);