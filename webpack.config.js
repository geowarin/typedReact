var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },

  entry: './app/app.ts',

  plugins: [new HtmlWebpackPlugin({
    title: 'React + TypeScript'
  })],

  output: {
    path: 'build',
    filename: 'bundle.js'
  },

  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.ts$/, loader: 'typescript-loader?typescriptCompiler=jsx-typescript'
      }
    ]
  }
};
