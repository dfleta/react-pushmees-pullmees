/**
 * Callbacks functions para el controller Reality
 */

 const Meeseeks = require('../models/meeseeks');

 var realityAPI = (function singleController() {

    const getReality = function(req, res, next) {
        // disparo el middleware pre find
        // en el modelo meeseeks
        Meeseeks.find()
            // recogemos en reality el contenido 
            // de la colección meeseeks de MongoDB
            .exec(function (err, reality) {
                // Los errores de las funciones asincronas
                // se pasan al middleware de express invocando
                // a next(err)
                // El middleware esta en app.use()
                // Es nuestra responsabilidad manejar
                // los errores producidos por funciones
                // asincronas
                if (err) { return next(err); } // Pass errors to Express.
                // Successful, so render.
                res.status(200).type('json').json(reality);
            })
    }

    const deleteReality = ( (req,res, next) => {
        // deleteMany() returns an object with the property
        // deletedCount containing the number of documents deleted
        Meeseeks.deleteMany()
            .exec(function (err, deletedCount) {
                if (err) { return next(err); }
                res.status(200).type('json').json(deletedCount);
            })
    });

    const explode = function(req, res, next) {
        // los metodos de moongoose elegidos
        // se basan en poder lanzar el middleware
        // de mongoose en pre y post 
        // y si el middleware ejecuta en 
        // la query o en el post
        // Ver modelo de Meeseeks
        Meeseeks.findOneAndDelete({ _id: req.params.id })
            .exec(function (err, mees) {
                if (err) { return next(err); }
                console.log(mees._id.toString());
                res.status(200).type('json').json(mees);
            })
    }

    const getMeeseeks = function(req, res, next) {
        if (req.params.position <= 0) {
            res.status(200).type('json').json({});
        }
        Meeseeks.find()
            .sort({$natural:1})
            .skip(req.params.position -1)
            .limit(1)
            //.select('_id messageOnCreate') => al pre middleware de find en schema
            .exec(function (err, mees) {
                if (err) { return next(err); }
                res.status(200).type('json').json(mees);
            });
    }
    
    // public API
    return {
        getReality,
        deleteReality,
        explode,
        getMeeseeks
    };
})(); 


exports.realityAPI = realityAPI;
