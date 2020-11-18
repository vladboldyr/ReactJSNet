const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require("path");
const webpack = require("webpack");
const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}


module.exports = {
   context: path.resolve(__dirname),
    entry: {
      main:['@babel/polyfill',"./index.jsx"]
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",//'babel-loader',"awesome-typescript-loader",
                options: babelOptions('@babel/preset-typescript')
            },
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: babelOptions('@babel/preset-react')
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'style-loader',"css-loader"],
                exclude: [/public/,/node_modules/]
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
                ],
                exclude: [/node_modules/, /public/]
            },
            {
              test: /\.(scss|sass)$/,
              //include: /node_modules/, 
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
                      loader:'sass-loader' // compiles Sass to CSS
                     /*  options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: "[name]__[local]___[hash:base64:5]",
                        }			 					
                    }*/

                  }
              ],
              exclude: [/node_modules/,/public/]
          },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    externals: {
      jquery: 'jQuery',
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        extensions: ["*", ".js", ".jsx",".ts", ".tsx", ".css", ".scss"] },
    output: {
        path: path.resolve(__dirname, "/public/dist/"),
        publicPath: "/dist",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true,
        historyApiFallback: true,
        proxy: {
          '/api': {
            target: 'http://localhost:5000'
          },
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            inject: 'body'
        }),
        new MiniCssExtractPlugin()
        /* ,
        new webpack.ProvidePlugin({
          "React": "react",
        }), */
      ]
};