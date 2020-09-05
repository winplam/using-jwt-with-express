const _ = require('lodash')

let words = ['tank', 'boy', 'tourist', 'ten',
  'pen', 'car', 'marble', 'sonnet', 'pleasant',
  'ink', 'atom']

console.log('Starting with \'t\'')
words.forEach(e => {

  if (_.startsWith(e, 't')) {

    console.log(e)
  }
})

console.log('Ending with \'k\'')
words.forEach(e => {

  if (_.endsWith(e, 'k')) {

    console.log(e)
  }
})