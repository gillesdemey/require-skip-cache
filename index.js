'use strict'

var Module = require('module')

module.exports = function (request) {
  var filename = require.resolve(request)

  var mod = new Module(filename)

  mod.load(filename)
  return mod.exports
}
