var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.join(__dirname, 'src/App.jsx')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel?stage=0', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel?stage=0', exclude: /node_modules/},
    ]
  },
  devServer: {
      publicPath: "/",
      contentBase: "./www",
      historyApiFallback: true
  },
  plugins: [HtmlWebpackPluginConfig]
};
