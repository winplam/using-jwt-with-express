const _ = require('lodash')

console.log(_.pick({ name: 'John', age: 25 }, 'name'))
console.log(_.pick({ name: 'John', age: 25 }, 'age'))