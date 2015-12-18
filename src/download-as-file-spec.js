const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('download', () => {
  const download = require('./download-as-file')
  it('is a function', () => {
    la(is.fn(download))
  })
})
