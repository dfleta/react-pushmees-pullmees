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

// pre middleware
// se ejecuta una vez que la query find()
// esta formada, antes de su exec()
// por lo que tenemos acceso a los 
// parametros de la query
meeseeksSchema.pre('find', function() {
    // this instanceof mongoose.Query
    // No debemos intentar acceder al objeto
    // req de express porque acoplamos
    // acceso a datos y controller...
    // y tampoco se puede en mongoose
    // this.getFilter() permite el acceso
    // a todos los parametros de la query

    // al filtrar los meeseeks con un find()
    // solo ofrezco su id y saludo 
    this.select('_id messageOnCreate');

    // next() es opcional
  });

// Export function para crear la clase modelo Meeseek
// El primer argumento de mongoose.model() 
// determina el nombre de la colección en la bbdd MongoDB 

module.exports = mongoose.model('Meeseeks', meeseeksSchema);