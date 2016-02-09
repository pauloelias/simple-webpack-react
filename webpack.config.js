const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
};

const config = {
  entry: PATHS.app + '/js/main.js',
  output: {
    path: PATHS.build + '/assets',
    filename: 'bundle.js',
    publicPath: '/assets'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        include: PATHS.app + '/js'
      }, {
        test: /\.css?/,
        loaders: ['style', 'css'],
        include: PATHS.app + '/css'
      }
    ]
  }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(config, {
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      devtool: 'eval-source-map',
      host: process.env.HOST,
      port: process.env.PORT || 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(config, {});
}
