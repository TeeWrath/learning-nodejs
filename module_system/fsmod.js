const fs = require('fs')

// Synchronous
const files1 = fs.readdirSync('../global')
const files2 = fs.readdirSync('../')
const files3 = fs.readdirSync('./')

console.log(files1);
console.log(files2);
console.log(files3);

// Asynchronous
fs.readdir('$', function(err,res){
    if (err) console.log('Error: ', err)
    else console.log('Result: ', res)
});
