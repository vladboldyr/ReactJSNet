const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");
const webpack = require("webpack");
let development = process.env.NODE_ENV === 'development';

//const extractCSS = new ExtractTextPlugin('./stylesheets/[name].css');
//const extractLESS = new ExtractTextPlugin('./stylesheets/[name].less');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })/* ["style-loader", "css-loader"] */
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader' // compiles Less to CSS
                    }
                ]
            },
            {
              test: /\.(scss|sass)$/,
              use: [
                  {
                      loader: 'style-loader'
                  },
                  {
                      loader: 'css-loader' // translates CSS into CommonJS
                  },
                  { 
                    loader: "css-modules-typescript-loader"
                  }, 
                  {
                      loader: 'sass-loader' // compiles Sass to CSS
                  }
              ]
          },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    externals: {
        jquery: 'jQuery',
        react:'React'
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        extensions: ["*", ".js", ".jsx",".ts", ".tsx", ".css", ".scss"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            inject: 'body'
        }),
        new ExtractTextPlugin('[name].min.css')
      ]
};