const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
               /*  query: {
                  presets: ['react', 'es2015','@babel/preset-react']
                }, */
               /*  query: {
                  presets: ['@babel/preset-react', '@babel/preset-env'],
                  plugins: ['@babel/proposal-class-properties']
                }, */
                options: babelOptions('@babel/preset-react')//{ presets: ["@babel/env",'react', 'es2015','@babel/preset-react'] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: [/node_modules/, /public/]
                /* ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader" */
                /* ["style-loader", "css-loader"] */
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
              ],
              exclude: [/node_modules/, /public/]
          },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    externals: {
      jquery: 'jQuery',
     /*  "react": "React",
      "react-dom": "ReactDOM" */
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
        new webpack.ProvidePlugin({
          "React": "react",
        }),
      ]
};