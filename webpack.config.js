const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
};

const config = {
  entry: PATHS.app + '/js/main.js',
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.scss',
      '.sass'
    ]
  },
  output: {
    path: PATHS.build + '/assets',
    filename: 'bundle.js',
    publicPath: '/assets',
  },
  module: {
    loaders: [
      // BABEL
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        },
        include: PATHS.app + '/js'
      },
      // SCSS/SASS
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 2 versions',
          'sass?outputStyle=compressed'
        ]
      },
      // IMAGES
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      }
    ]
  }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(config, {
    devServer: {
      contentBase: PATHS.build,
      colors: true,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      devtool: 'eval-source-map', // 'cheap-module-eval-source-map'
      host: process.env.HOST,
      port: process.env.PORT || 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(config, {});
}
