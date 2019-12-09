const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Set development mode for a more readable bundle.
  // Remove in production.
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Loaders.
  module: {
    rules: [
      {
        // Html-loader, set to minify html.
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        // Sass-loader.
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // File-loader for media.
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
      {
        // File-loader for fonts.
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    // CleanWebpackPlugin cleans the build folder before each build.
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
