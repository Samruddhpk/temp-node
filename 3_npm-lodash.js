// using one of lodash method

const _ = require("lodash")

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)

// created first package - npm init - y (default) - package.json
// installed lodash
