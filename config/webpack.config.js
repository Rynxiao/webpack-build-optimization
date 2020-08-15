const path = require('path');
const projectPath = path.join(__dirname, '..');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(projectPath, 'src', 'app'),
  output: {
    path: path.join(projectPath, 'dist'),
    publicPath: '/dist/',
    filename: "[name].[hash:8].js"
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }],
          ["@babel/preset-react"]
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(projectPath, 'dist', 'index.html'),
      template: path.join(projectPath, 'src', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(projectPath, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
    hot: true, 
  }
};