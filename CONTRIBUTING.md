# Contributing

Interested in contributing to skale? We'd love
your help. Skale-engine is an open source project, built one
contribution at a time by users just like you.

The [Code of Conduct] details the bare minimum behavior
expectations required from contributors.

## Where to get help or report a problem

* If you have a question about using skale, start a discussion
  on [gitter] or on [google group]. Please do not open issues for
  questions or support requests.
* If you think you have found a bug within skale, open an
  [issue].  Do not forget to check that it doesn't already exist
  in our [issue database]
* If you want to learn more about skale internals, architecture and
  how to extend skale, see the
  [Skale Hacker's Guide](docs/skale-hackers-guide.md)
* If you have a suggestion for improvement or a new feature, create
  a [pull request] so it can be discussed and reviewed by the
  community and project committers. Even the project committers
  submit their code this way.

## Submitting a pull request

* Create your own [fork] on github, then checkout your fork
* Write your code in your local copy. It's good practice to create
  a branch for each new issue you work on, although not compulsory
* Your code must follow existing coding style, and tests must pass.
  To check coding style, run `npm run lint`. The [coding style] of skale
  is the same as in core NodeJS.
  To run the tests, first run `npm install`, then `npm test`
* If the tests pass, you can commit changes to your fork and then
  create a pull request from there. Reference any relevant issue by
  including its number in the message, e.g. #123

## Writing documentation

The [documentation guidelines] from Google provide a good reference
for writing consistent and good technical documents, in particular
[API documentation rules].

Note: skale documentation was started before knowing this standard,
thus is not yet fully compliant! Please help us to write better
docs.

## Coding rules

In addition to applying the already mentioned [coding style],
the following conventions should be applied as well:

* Use `const` instead of `var` for declarations, whenever possible
* Use `let` instead of `var` if reference must be reassigned
* Use array or object destructuring to set variables from array or
  object: `let [a, b] = [1, 2, 3]`
* Use arrow functions in callbacks, where applicable: `map`, `reduce`,
  `aggregate`, etc

Note: the code base is not yet fully compliant to these rules. Contributions
are welcome here.

[Code of Conduct]: CODE_OF_CONDUCT.md
[coding style]: https://github.com/felixge/node-style-guide
[gitter]: https://gitter.im/skale-me/skale
[google group]: https://groups.google.com/forum/#!forum/skale
[issue database]: https://github.com/skale-me/skale/issues
[issue]: https://github.com/skale-me/skale/issues/new
[pull request]: #submitting-a-pull-request
[fork]: https://github.com/skale-me/skale
[documentation guidelines]: https://developers.google.com/style/
[API documentation rules]: https://developers.google.com/style/api-reference-comments
