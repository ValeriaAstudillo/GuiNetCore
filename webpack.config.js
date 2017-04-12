var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    
    /*'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:4848',
    'webpack/hot/only-dev-server',*/
    './redux/components/index.tsx'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/bundle/app', //'/dist'
    path: path.resolve('bundle/app') //path.resolve('dist')
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] }
    ]
  }/*,
  plugins: [
    // Add the HMR plugin
    new webpack.HotModuleReplacementPlugin()
  ]*/
};