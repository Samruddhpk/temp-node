// local variable - secret one/encapsulated one

const secret = "Secret"

// shared variables/data
const john = "john"
const peter = "peter"

// export this module

module.exports = { john, peter }

// as per ES6 - if object key and value is same, then pass only one (either key or value) - {john:'john',peter:'peter'} - {john,peter}
