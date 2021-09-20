import { WebpackPluginInstance, Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackDevServer from 'webpack-dev-server';
const path = require('path');

const config: Configuration = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less/,
        exclude: /node_module/,
        include: (str: string) => !/.global.less$/.test(str),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
              sourceMap: false,
            }
          },
          {
            loader: 'less-loader',
            options: { lessOptions: { javascriptEnabled: true } },
          }],
      },
      {
        test: /\.global.less/,
        exclude: /node_module/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            }
          },
          {
            loader: 'less-loader',
            options: { lessOptions: { javascriptEnabled: true } },
          }],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: false,
      hash: false,
      inject: 'body',
      writeToDisk: true,
    } as HtmlWebpackPlugin.Options),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
}

const devServer: WebpackDevServer.Configuration = {
  compress: true,
  port: 9000,
  historyApiFallback: true,
}

export default { ...config, devServer };