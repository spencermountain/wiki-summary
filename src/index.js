const compromise = require('compromise')
const defaults = {
  max: 250,
  min: 100,
}

const removeTitle = function(s, sentence, title) {
  //remove bolds (longest-first)
  let bolds = sentence.bolds().sort((a, b) => {
    if (a.length > b.length) {
      return -1
    }
    return 1
  })
  bolds.forEach((b) => {
    s = s.not(b)
  })
  s = s.not('^#Noun+ #Copula')
  s = s.not(`^${title}`)
  return s
}

//use commas, etc
const byClause = function(s) {
  let orig = s.clone()
  let clauses = s.clauses()
  for (let i = 0; i < clauses.length; i += 1) {
    let c = clauses.eq(i)
    if (c.has('#Copula')) {
      let result = clauses.slice(i, clauses.length)
      result = result.not('^#Copula')
      return result
    }
  }
  return orig
}

//
const extract = function(wp, options) {
  options = options || {}
  options = Object.assign({}, defaults, options)
  let sentence = wp.sentences(0)
  if (!sentence) {
    return ''
  }
  // let title = wp.title() || ''
  let s = compromise(sentence.text())
  //born-in junk
  s = s.not('#Parentheses')
  //by comma-section
  s = byClause(s)
  //remove 'Toronto' from beginning
  // s = removeTitle(s, sentence, title)
  s.debug()
  return s.trim().out('text')
}
module.exports = extract
