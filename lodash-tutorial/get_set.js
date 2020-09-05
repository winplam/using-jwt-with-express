const _ = require('lodash')

let data = { user: { name: 'John Doe', age: 34, occupation: 'gardener' } }

_.set(data, 'user.age', 36)
console.log(data)

console.log(_.get(data, 'user.name', 'unknown'))
console.log(_.get(data, 'user.marital_status', 'unknown'))