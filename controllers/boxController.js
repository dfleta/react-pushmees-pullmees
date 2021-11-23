
const importaBox = require('../domain/box');

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

    // get a meeseeks box

    const factory = function(req, res) {
        // res.send('NOT IMPLEMENTED: Meeseeks Box');
        res.status(200).type('json').json(box);
    }
    
    // get a meeseeks
    
    const createMeeseeks = function(req, res) {
        // res.send('NOT IMPLEMENTED: Create meeseeks');
        box.pressButton(reality);
        console.log("reality length = ", reality.length);
        res.status(200).type('json').json(box.getProtoMeeseks());
    }

    const getMeeseeks = function(req, res) {
        // res.send(req.params);
        // Utilizo destructurig para forzar la busqueda en
        // la cadena de prototipos del objeto MrMeeseeks {} 
        // de sus propiedades message. Lo que hay en 
        // reality es un objeto sin propiedades propias 
        // MrMeeseeks {} cuyo prototipo es el objeto
        // que está en la propiedad this.mrMeeseeks
        // de box
        let {messageOnCreate: hi, messageOnRequest: greetings} = reality[req.params.position];
        res.status(200).type('json').json({messageOnCreate: hi, messageOnRequest: greetings});
    
    }
    
    // public API
    return {
        factory,
        createMeeseeks,
        getMeeseeks
    };
})(); 


exports.boxAPI = boxAPI;
