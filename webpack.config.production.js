const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {GenerateSW} = require('workbox-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {scssConfig, entryConfig, outputConfig, wbConfig} = require("./webpack.config.shared");

const terserPluginConfig = {
    extractComments: false,
    terserOptions: {
        compress: {
            drop_console: true,
        },
    }
};

module.exports = (_, options) => 
{
    return {
        mode: options.mode,
        entry: entryConfig,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        ["postcss-preset-env"],
                                    ],
                                },
                            },
                        },
                        "sass-loader"
                    ],
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                    type: "javascript/auto",
                    loader: "file-loader",
                    options: {
                        publicPath: "../",
                        name: "[path][name].[ext]",
                        context: path.resolve(__dirname, "src/assets"),
                        emitFile: false,
                    },
                },
            ],
        },
        resolve: { extensions: [".tsx", ".ts", ".js"] },
        output: {
            filename: "js/[name].bundle.js",
            path: path.resolve(__dirname, outputConfig.destPath),
            publicPath: "/",
        },
        optimization: {
            minimizer: [
                new TerserPlugin(terserPluginConfig)
            ],
            splitChunks: {
                chunks: "all",
            },
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({ filename: scssConfig.destFileName }),
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                inject: true,
                minify: false
            }),
            new GenerateSW(wbConfig)
        ]
    };
};