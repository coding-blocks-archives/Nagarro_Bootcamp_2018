const lib = require('./lib')

console.log("Hello" + lib.getName())
console.log(global.x)

const lib2 = require('./lib')
lib.a = 14
console.log(lib2)