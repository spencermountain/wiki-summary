<div align="center">
  <div>quick summaries of wikipedia articles</div>
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />
  <!--<a href="https://npmjs.org/package/efrt">
    <img src="https://img.shields.io/npm/v/efrt.svg?style=flat-square" />
  </a>
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-green.svg?style=flat-square" />
  </a>
  <a href="https://www.codacy.com/app/spencerkelly86/efrt">
    <img src="https://api.codacy.com/project/badge/grade/fc03e2761c8c471c8f84141abf2704de" />
  </a>
  <a href="https://www.codacy.com/app/spencerkelly86/efrt">
    <img src="https://api.codacy.com/project/badge/Coverage/fc03e2761c8c471c8f84141abf2704de" />
  </a>-->
</div>

<!--<div align="center">
  <code>npm install efrt</code>
</div>-->

wiki-summary is an attempt to create a configurable version of [the 'extract'](https://en.wikipedia.org/api/rest_v1/page/summary/Toronto?redirect=true) section of the wikipedia [summary api](https://en.wikipedia.org/api/rest_v1/#!/Page_content/get_page_summary_title).

It combines:
* the **wikiscript-parsing** of [wtf_wikipedia](http://github.com/spencermountain/wtf_wikipedia),
* and the **natural-language-handling** of [compromise](http://github.com/spencermountain/compromise),

to trim-down an appropriate piece of summary text for a wikipedia article.

it is primarily, *(at least for now,)* based on a heavily-trimmed-down first/second sentences of the 'Intro' section of the page. In the future it may do more clever things.

you can read about the shenanigans involved in doing this [here](https://blog.wikimedia.org/2018/04/20/why-it-took-a-long-time-to-build-that-tiny-link-preview-on-wikipedia/).

ideally, this tool will be used easily in conjunction with things like **[dumpster-dive](https://github.com/spencermountain/dumpster-dive)** to produce segments of text that describe every english wikipedia article in a reasonable way.

WIP!

```js
const wtf = require('wtf_wikipedia')
const summary = require('./src')

let options = {
  max: 150,
  min: 40,
}

wtf.fetch('toronto').then(doc => {
  let str = summary(doc, options)
  //"The capital of the Canadian province of Ontario"
})
```

MIT
