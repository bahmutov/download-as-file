const path = require('path')

module.exports = {
  output: {
    library: 'downloadAsFile',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'download-as-file.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['babel-preset-env', {
              targets: {
                browsers: [
                  'ie 9',
                  'last 1 Chrome versions',
                  'last 1 Firefox versions',
                  'last 1 Safari versions'
                ]
              }
            }]]
          }
        }
      }
    ]
  },
  entry: {
    library: './src/download-as-file'
  }
}
