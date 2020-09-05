const _ = require('lodash')

let p = { age: 24, name: 'Rebecca', occupation: 'teacher' }

let keys = _.keys(p)
console.log(keys)

let values = _.values(p)
console.log(values)