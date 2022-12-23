// call module

const path = require("path")

// seperator

console.log(path.sep)

// filepath joiner

const filepath = path.join("contents", "subfolder", "test.txt")

console.log(filepath)

// basename
const base = path.basename(filepath)
console.log(base)
// get absolute path

const absolute = path.resolve(__dirname, "contents", "subfolder", "test.txt")

console.log(absolute)
