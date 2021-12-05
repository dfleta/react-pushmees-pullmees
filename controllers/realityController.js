/**
 * Callbacks functions para el controller Reality
 */

 const Meeseeks = require('../models/meeseeks');

 var realityAPI = (function singleController() {

    const getReality = function(req, res) {
        Meeseeks.find()
            // recogemos en reality el contenido 
            // de la colección meeseeks de MongoDB
            .exec(function (err, reality) {
                if (err) { return next(err); }
                // Successful, so render.
                res.status(200).type('json').json(reality);
            })
    }

    const deleteReality = ( (req,res) => {
        // deleteMany() returns an object with the property
        // deletedCount containing the number of documents deleted
        Meeseeks.deleteMany()
            .exec(function (err, deletedCount) {
                if (err) { return next(err); }
                // Successful, so render.
                res.status(200).type('json').json(deletedCount);
            })
    });

    const explode = function(req, res) {
        Meeseeks.findByIdAndDelete(req.params.id)
            .exec(function (err, mees) {
                if (err) { return next(err); }
                console.log(mees._id.toString());
                res.status(200).type('json').json(mees);
            })
    }

    const getMeeseeks = function(req, res) {
        if (req.params.position  <= 0) {
            res.status(200).type('json').json({});
        }
        Meeseeks.find()
            .sort({$natural:1})
            .skip(req.params.position -1)
            .limit(1)
            //.select('_id messageOnCreate') => al pre middleware
            .exec(function (err, mees) {
                // añadir un pre middleware obliga
                // a eliminar next(err) e implementarlo
                if (err) { return "ups!"; }
                // Successful, so render.
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
