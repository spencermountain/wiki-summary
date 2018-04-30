const wtf = require('wtf_wikipedia')
const extract = require('./src')

let options = {
  max: 150,
  min: 150,
}

wtf.fetch('toronto').then(doc => {
  let str = extract(doc, options)
  console.log(str)
})
