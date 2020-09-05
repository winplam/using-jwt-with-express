const _ = require('lodash')

let p = { age: 24, name: 'Rebecca', occupation: 'teacher' }

_.forIn(p, (value, key) => {

  console.log(`${key}: ${value}`)
})