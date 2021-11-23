/**
 * Clase Mr Meeseeks
 * 
 * Las historias de usuario a programar
 * se encuentran aqui: 
 * https://www.youtube.com/watch?v=qUYvIAP3qQk
 */


function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = ["Oooh yeah! Can do!", 
                             "Yes sireee!" , 
                             "Oh, yeah!, Yes, ma'am!"];
}

MrMeeseeks.prototype.speakOnCreate = function() {
    console.log(this.messageOnCreate);
};

MrMeeseeks.prototype.speakOnRequest = function() {
    let message = this.messageOnRequest[Math.floor(Math.random() * this.messageOnRequest.length)]
    console.log(message);
    // testing
    return message;
};

MrMeeseeks.prototype.makeRequest = function(deseo, objeto) {
    let closure = function(cosa) {
        function execute() {
            return deseo + " " + cosa;
        }
        return execute;
    };
    // creamos propiedad accion al vuelo en el objeto MrMeeseeks
    // accion = execute con el closure sobre deseo
    this.accion = closure(objeto);
    this.speakOnRequest();
};

// Una vez creado el closure accion sobre deseo
// fulfillRequest recupera las variables deseo y objeto
MrMeeseeks.prototype.fulfillRequest = function() {
    console.log(this.accion() + " All done!!");
    // testing
    return this.accion() + " All done!!";
};

MrMeeseeks.prototype.learnRequest = function(deseo, objeto) {
    // deseo es una funcion con un closure
    // sobre objeto 
    this.accion = deseo(objeto);
};


// singleton de MrMeeseeks
var factory = (function singletonMrMeeseeks() {

    const prototipo = new MrMeeseeks();

    return {
        get: function() {
            return prototipo;
        }
    };
})();
// IIFE para provocar la ejecucion de singletonMrMeeseeks()
// sobre el closure prototipo
// y fijar para siempre jamás el valor del prototipo
// a esa primera instancia.


/**
 * Testing e importacion del singleton
 * de la clase MrMeeseeks
 */

// node.js modules
exports.singleMrMeeseeks = factory;
