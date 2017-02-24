var o = require('@carbon-io/atom').o(module).main
var _o = require('@carbon-io/bond')._o(module)
var testtube = require('@carbon-io/test-tube')

var tests = o({
  _type: testtube.Test,
  name: 'CarbonCoreTests',
  tests: [require('@carbon-io/fibers').$Test, require('@carbon-io/bond').$Test]
})

module.exports = tests
