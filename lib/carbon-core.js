module.exports = {
  HttpErrors: require('@carbon-io/http-errors'),
  atom: require('@carbon-io/atom'),
  bond: require('@carbon-io/bond'),
  ejson: require('@carbon-io/ejson'),
  fibers: require('@carbon-io/fibers'),
  leafnode: require('@carbon-io/leafnode'),
  logging: require('@carbon-io/logging'),
  testtube: require('@carbon-io/test-tube')
}

Object.defineProperty(module.exports, '$Test', {
  enumerable: false,
  configurable: false,
  get: function() {
    return require('../test')
  }
})
