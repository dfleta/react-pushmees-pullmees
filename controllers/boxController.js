const importaBox = require('../domain/box');
const Meeseeks = require('../models/meeseeks');
const Boxes = require('../models/boxes');

/**
 * Callbacks functions para el controller Box
 * 
 * Closure sobre reality y box para 
 * guardar la caja y los meeseeks
 * entre llamadas a los endpoints,
 * simulando que de algún modo dispongo de una bbdd.
 * Esto no es stateless por lo que 
 * estoy cargándome el RESTFULL...
 * hasta que implemente la bbdd.
 */


var boxAPI = (function singleController() {

    let reality = [];
    let box = importaBox.singletonBox.getBox();
    // el primer meeseeks es el prototipo
    box.pressButton(reality);

    // get a meeseeks box

    const factory = function(req, res) {
        // res.send('NOT IMPLEMENTED: Meeseeks Box');

        // box tiene una referencia onetoone a un meeseeks
        // Ese meeseeks ha de existir en la bbdd
        // Crearlo primero y relacionarlo con box
        // por la _id que MongoDB asigna al doc meeseeks
        // en la bbdd 
        let meeseeksInstance = new Meeseeks(
            box.getProtoMeeseks()
        );

        meeseeksInstance.save(function (err) {
            if (err) return handleError(err);
        });

        let boxInstance = new Boxes(
            {
                name: box.name,
                mrMeeseeks: meeseeksInstance._id
            }
        );

        boxInstance.save(function (err) {
            if (err) return handleError(err);
        });
        
        res.status(200).type('json').json(boxInstance);
    }
    
    // get a meeseeks
    
    const createMeeseeks = function(req, res) {
        // res.send('NOT IMPLEMENTED: Create meeseeks');
        box.pressButton(reality);
        console.log("reality length = ", reality.length);

        // a la bbdd
        let meeseeksInstance = new Meeseeks(
            box.getProtoMeeseks()
        );

        meeseeksInstance.save(function (err) {
            if (err) return handleError(err);
        });

        res.status(200).type('json').json(meeseeksInstance);
    }

    // get meeseeks por parametro

    const getMeeseeks = function(req, res) {
        // res.send(req.params);
        // Utilizo destructurig para forzar la busqueda en
        // la cadena de prototipos del objeto MrMeeseeks {} 
        // de sus propiedades message. Lo que hay en 
        // reality es un objeto sin own properties 
        // MrMeeseeks {} cuyo prototipo es el objeto
        // que está en la propiedad this.mrMeeseeks
        // de box
        if (reality.length == 0 || req.params.position >= reality.length) {
            Meeseeks.findOne()
                .exec(function (err, mees) {
                    if (err) { return next(err); }
                    // Successful, so render.
                    res.status(200).type('json').json(mees);
                });
        } else {
            // destructuring
            let {messageOnCreate: hi, messageOnRequest: greetings} = reality[req.params.position];
            res.status(200).type('json').json({messageOnCreate: hi, messageOnRequest: greetings});
        } 
    }

    const deleteBox = ( (req, res) => {
        Boxes.deleteMany()
            .exec(function (err, deletedCount) {
                if (err) { return next(err); }
                // Successful, so render.
                res.status(200).type('json').json(deletedCount);
            })
    })
    
    // public API
    return {
        factory,
        createMeeseeks,
        getMeeseeks,
        deleteBox
    };
})(); 


exports.boxAPI = boxAPI;
