// EventEmitter is a class hence starts with capital letter
const EventEmitter = require('events');
// emitter is an object of the above class
const emitter = new EventEmitter();

// Register Listner - listens to the changes in the event
emitter.on('messageLogged', function(){
    console.log('Listener called')
})

// Register event - something occuring
emitter.emit('messageLogged');