var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
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
      {
        loader: "babel?stage=0",
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: [/\.jsx?$/,/\.js$/]
      }
    ]
  },
  devServer: {
      publicPath: "/",
      contentBase: "./www",
      historyApiFallback: true
  },
  plugins: [HtmlWebpackPluginConfig]
};
