const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Event
emitter.on('MessageLogged', function () {
    console.log('Listen Called')
});

//Raise a Event
emitter.emit('MessageLogged');