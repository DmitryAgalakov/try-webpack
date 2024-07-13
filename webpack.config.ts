import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: {
    mainEntryPoint: path.resolve(__dirname, 'src', 'index.tsx'),
  },

  devServer: {
    port: 3000,
    open: true,
  },


  plugins: [
    new HtmlWebpackPlugin({
      title: 'my-page-title',
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    })
  ],

  output: {
    filename: '[name].bundle.js', // name - entry point name.
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