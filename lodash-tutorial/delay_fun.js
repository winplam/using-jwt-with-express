const _ = require('lodash')

function message () {
  console.log('Some message')
}

_.delay(message, 1500)
console.log('Some other message')