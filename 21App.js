const EventEmitter = require('events');
const Logger = require('./21LoggerClass');
const logger = new Logger();

//Register a listener
logger.on('MessageLogged',(arg)=>{
    console.log('listener',arg);
});


logger.log('Hey');