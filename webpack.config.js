const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/js/index.js',
  'jquery',],
  output: {

    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js',

  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]'
        }
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]'
        }
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },

    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    // compress: true,
    port: 9000,
    devMiddleware: {
      writeToDisk: true,
    },
    
    open: true,
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/projects.html',
      filename: 'projects.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/poject-details.html',
      filename: 'poject-details.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/blog.html',
      filename: 'blog.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/blog-details.html',
      filename: 'blog-details.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/add-blog.html',
      filename: 'add-blog.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html'
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

    new CleanWebpackPlugin(),



  ],
};
