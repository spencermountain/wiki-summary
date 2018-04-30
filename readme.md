wiki-summary is an attempt to create a configurable version of [the extract](https://en.wikipedia.org/api/rest_v1/page/summary/Toronto?redirect=true) section of the wikipedia summary api.

It combines the wikiscript-parsing of [wtf_wikipedia](http://github.com/spencermountain/wtf_wikipedia) and the natural-language processing of [compromise](http://github.com/spencermountain/compromise), to trim-down an appropriate piece of text for summarizing a wikipedia article.

you can read about the shenanigans involved in doing this [here](https://blog.wikimedia.org/2018/04/20/why-it-took-a-long-time-to-build-that-tiny-link-preview-on-wikipedia/).

ideally, this tool will be easily used in conjunction with things like [dumpster-dive](https://github.com/spencermountain/dumpster-dive) to produce segments of text to describe every english wikipedia article in a reasonable way.


MIT
