const _ = require('lodash')

let words = ['_falcon', '-owl-', '_-sky-_']
let trimmed = _.map(words, (word) => { return _.trim(word, '-_')})

console.log(trimmed)