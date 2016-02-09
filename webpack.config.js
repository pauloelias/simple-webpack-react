const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const NpmInstallPlugin = require('npm-install-webpack-plugin');
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
};

const config = {
  entry: PATHS.app + '/js/main.js',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build + '/assets',
    filename: 'bundle.js',
    publicPath: '/assets'
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
      // CSS
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app + '/css'
      },
      // SCSS/SASS
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      // IMAGES
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8000'
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
      devtool: 'eval-source-map', // 'cheap-module-eval-source-map'
      host: process.env.HOST,
      port: process.env.PORT || 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true // --save
      })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(config, {});
}
