var __ = require('@carbon-io/fibers').__(module).main
var o = require('@carbon-io/atom').o(module).main
var _o = require('@carbon-io/bond')._o(module)
var testtube = require('@carbon-io/test-tube')

__(function() {
  module.exports = o({
    _type: testtube.Test,
    name: 'CarbonCoreTests',
    tests: [
      require('@carbon-io/fibers').$Test,
      require('@carbon-io/bond').$Test,
      require('@carbon-io/atom').$Test,
      require('@carbon-io/test-tube').$Test,
      require('@carbon-io/leafnode').$Test
    ]
  })
})
