var url = 'https://mylogger.io/log';

function log(message){
    console.log(message)
}

// exporting a module
module.exports.log = log;