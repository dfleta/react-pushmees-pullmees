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
    
    // public API
    return {
        getReality,
        deleteReality,
        explode
    };
})(); 


exports.realityAPI = realityAPI;
