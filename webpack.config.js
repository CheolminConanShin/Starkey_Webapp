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
  entry: ['babel-polyfill',path.resolve(__dirname, 'src/App.jsx')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: [/\.jsx?$/,/\.js$/]
      },
      {test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', exclude: /node_modules/},
      {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx' ]
  },
  devServer: {
      publicPath: "/",
      contentBase: "./build",
      historyApiFallback: true
  },
  plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig]
};
