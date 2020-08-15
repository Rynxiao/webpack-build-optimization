const path = require('path');
const projectPath = path.join(__dirname, '..');

module.exports = {
  mode: 'development',
  entry: path.join(projectPath, 'src', 'app'),
  watch: true,
  output: {
    path: path.join(projectPath, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(projectPath, 'src')
      ],
      exclude: [
        path.resolve(projectPath, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(projectPath, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};