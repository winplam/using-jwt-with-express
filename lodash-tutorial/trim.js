const _ = require('lodash')

let word = '\tfalcon\t'

let trimmed = _.trim(word)
console.log(trimmed + 'owl')

let trimmed2 = _.trimStart(word)
console.log(trimmed2 + 'owl')

let trimmed3 = _.trimEnd(word)
console.log(trimmed3 + 'owl')