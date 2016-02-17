var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var host = '0.0.0.0';
var port = '9000';

var config = {
  entry: './example/src',
  devtool: 'source-map',
  output: {
    path: __dirname + '/example/build',
    filename: 'app.js',
    publicPath: __dirname + '/example'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    modulesDirectories: [
      'bower_components',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx'],
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

new WebpackDevServer(webpack(config), {
  contentBase: './example',
  hot: true,
  debug: true
}).listen(port, host, function (err, result) {
  if (err) {
    console.log(err);
  }
});
console.log('-------------------------');
console.log('Local web server runs at http://' + host + ':' + port);
console.log('-------------------------');

module.exports = config;
