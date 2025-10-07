// npm - global command, comes with node
// npm --version 

// local dependency 
// npm i <packageName>

// global dependency
// npm install -g <packageName>

// package.json stores info about project/package
// manual approach - create package.json in the root, create properties
// npm init - step by step, press enter to skip
// npm init -y - everything default

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
