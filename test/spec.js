var shuffleAndSplit = require('../index.js')
var assert = require('assert')

/* global describe it */

describe('shuffleAndsplit', function () {
  it('checks that all elements still present', function () {
    var numberOfElements = [1, 2, 3, 4, 5, 6].length
    var total = shuffleAndSplit([1, 2, 3, 4, 5, 6], 2).reduce(function (a, b) {
      return a.concat(b)
    })
    assert(numberOfElements === total.length)
  })
  it('checks numbers of groups is as specified', function () {
    var numberOfGroups = shuffleAndSplit([1, 2, 3, 4, 5, 6], 3).length
    assert(numberOfGroups === 3)
  })
})
