const os = require("os");

console.log("free memory: " + os.freemem());
console.log("total memory: " + os.totalmem());
console.log("Occupied memory: " + (os.totalmem() - os.freemem()));
