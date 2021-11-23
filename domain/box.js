
/**
 * clase Box
 */

// node.js modules
// importamos el singleton de la clase MrMeeseeks
// Si el modulo esta configurado como paquete
// es suficiente con indicar la ruta al directorio
var singletonMrMeeseeks = require('./mrmeeseeks');


function Box() {
    this.name = "Rick's box";
    this.mrMeeseeks = null;
}

Box.prototype.createMrMeeseeks = function() {
    if (! this.mrMeeseeks) {
        this.mrMeeseeks = singletonMrMeeseeks.singleMrMeeseeks.get();
    }
    // variable solo para propositos educativos de debugging: observar __proto__
    let meeseeksClon = Object.create(this.mrMeeseeks);
    return meeseeksClon;
};

Box.prototype.pressButton = function(reality) {
    let mrMee = this.createMrMeeseeks();
    mrMee.speakOnCreate();
    reality.push(mrMee);
};

// rompo encapsulación del closure sólo por motivos
// educativo de debugging
Box.prototype.getProtoMeeseks = function() {
    return this.mrMeeseeks;
};

// singleton de Box
// Es un objeto, no una función => no puede ejecutarse como factory()
// singleBox() devuelve unn objeto {getBox: getBox()}
var factory = (function singleBox() {
    
    const boxInstance = new Box();

    return { 
        getBox :function getBox() {
            return boxInstance;
        }
    };
})(); 
// IIFE para provocar la ejecucion de singleBox()
// sobre el closure boxInstance
// y fijar para siempre jamás el valor de boxInstance
// a esa primera instancia.

/**
 * Testing e importacion del singleton
 * de la clase Box
 */

// node.js modules
exports.singletonBox = factory;
