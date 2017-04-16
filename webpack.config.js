var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const CopyWebpackPlugin = require('copy-webpack-plugin')
const CopyWebpackPluginConfig = new CopyWebpackPlugin([{
  from: './src/assets'
}]);

module.exports = {
  entry: path.resolve(__dirname, 'src/App.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        loader: "babel?stage=0",
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: [/\.jsx?$/,/\.js$/]
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  devServer: {
      publicPath: "/",
      contentBase: "./build",
      historyApiFallback: true
  },
  plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig]
};
