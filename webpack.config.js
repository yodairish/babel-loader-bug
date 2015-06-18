'use strict';

module.exports = {
  entry: {
    'main': './src/main.js'
  },
  output: {
    path: __dirname + '/target/build',
    filename: './[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
    ]
  },
  node: {
    fs: 'empty'
  },
  devtool: '#inline-source-map'
};