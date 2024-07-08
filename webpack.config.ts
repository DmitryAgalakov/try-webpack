import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: {
    mainEntryPoint: path.resolve(__dirname, 'src', 'index.ts'),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },


  plugins: [
    new HtmlWebpackPlugin({
      title: 'my-page-title',
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: path.resolve(__dirname, 'build/html', 'index.[contenthash].html'),
    })
  ],

  output: {
    filename: '[name].m-bundle.js', // name - entry point name.
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
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};