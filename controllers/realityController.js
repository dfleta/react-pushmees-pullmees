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
    
    // public API
    return {
        getReality,
        deleteReality
    };
})(); 


exports.realityAPI = realityAPI;
