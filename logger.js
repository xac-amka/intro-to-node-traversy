const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');

// console.log(uuidv4());

class Logger extends EventEmitter{
    log(msg) {
        // Call event
        this.emit('message', {id: uuidv4(), msg : msg});
    }
}
// Uncomment the following
// module.exports = Logger; 

// CommonJS
// const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener ',data));

logger.log('Hello World');
logger.log('Hello Amka');
/**
 * Homework:
 *  Using fs to write file
 */