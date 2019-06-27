var ev = require('events');
var emitter = new ev.EventEmitter();

emitter.addListener('call', function () {
    console.log("event happened");
});

emitter.emit('call');