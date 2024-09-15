var randomVar = 'Subroto';

// Below will result in undefined in the console
// since the variable declared is not part of the
// global object due to node module system
global.console.log(global.randomVar)

console.log(module)