import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
  entry: {
    mainEntryPoint: path.join(__dirname, '/../src/index.tsx'),
  },

  devServer: {
    port: 3000,
    open: true,
  },


  plugins: [
    new HtmlWebpackPlugin({
      title: 'my-page-title',
      template: path.join(__dirname, '/../public/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],

  output: {
    filename: '[name].bundle.js', // name - entry point name.`
    path: path.resolve(__dirname, 'build', ),
    clean: true,
  },

  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                namedExport: false,
              }
            }
          },
          'sass-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};