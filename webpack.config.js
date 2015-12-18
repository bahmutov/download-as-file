module.exports = {
  output: {
    library: 'downloadAsFile',
    libraryTarget: 'umd',
    path: './dist',
    filename: 'download-as-file.js'
  },
  entry: {
    library: './src/download-as-file'
  }
}
