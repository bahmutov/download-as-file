const la = require('lazy-ass')
const is = require('check-more-types')

function downloadAsFile (opts) {
  la(is.object(opts), 'missing opts')
  la(is.unemptyString(opts.data), 'missing data string', opts)

  opts.type = opts.type || 'text/plain'

  /* global unescape, encodeURIComponent */
  var uri = opts.type === 'text/plain'
    ? 'data:text/plain;charset=utf-8,' + encodeURIComponent(opts.data)
    : 'data:' + opts.type + 'base64,' + window.btoa(unescape(encodeURIComponent(opts.data)))

  var a = document.createElement('a')
  a.download = opts.filename || 'data.txt'
  a.href = uri
  document.body.appendChild(a)
  a.click()
  if (is.fn(a.remove)) {
    a.remove()
  } else {
    // seems IE11 has troubles removing these nodes
    la.async(false, 'Missing element remove() method ...')
  }
}

module.exports = downloadAsFile
