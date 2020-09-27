const EventEmitter = require('events');
var emitter = new EventEmitter();

class Logger extends EventEmitter {

    log(message) {
        // Raise an event
        
        this.emit('MessageLogged', {
            id: 1,
            url: 'http://',
            message:message
        });
    }

}

module.exports = Logger;