
const importaBox = require('../domain/box');

/**
 * Callbacks functions para el controller Box
 * 
 * Closure sobre reality y box para 
 * guardar entre llamadas a los endpoints
 * la caja y los meeseeks
 * simulandoque de algún modo dispongo de una bbdd
 * Esto no es stateless por lo que 
 * estoy cargándome el RESTFULL...
 * hasta que implemente la bbdd.
 */


var boxAPI = (function singleController() {

    let reality = [];
    let box = importaBox.singletonBox.getBox();

    // get a meeseeks box

    const factoryBox = function(req, res) {
        // res.send('NOT IMPLEMENTED: Meeseeks Box');
        res.status(200).type('json').json(box);
    };
    
    // get a meeseeks
    
    const boxCreateMeeseeks = function(req, res) {
        // res.send('NOT IMPLEMENTED: Create meeseeks');
        box.pressButton(reality);
        console.log("reality length = ", reality.length);
        res.status(200).type('json').json(box.getProtoMeeseks());
    };
    
    // public API
    return {
        factory: factoryBox,
        createMeeseeks: boxCreateMeeseeks
    };
})(); 


exports.boxAPI = boxAPI;
