// modules - encapsulated information
// its same as ES6 modules
// its a splitted code in different files and calling in one file
// module is an object with many properties - in that one property --> exports{}

// importing names module

const names = require("./1_names")

// importing local function module
const sayHi = require("./1_1utils")

// importing alternative module
const data = require("./2_alternative_syntax")

sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)
console.log(data)

// can destructure the names - const {john,peter} = require('./names)
// sayHi(john)

// importing without exports

require("./3_mindgranade")
