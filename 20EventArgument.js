const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a Event
emitter.on('MessageLogged', (arg) => {
    console.log('Listen ', arg);
});

//Raise a Event
emitter.emit('MessageLogged',{
    id:1,
    url:'http://'
});