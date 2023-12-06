const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {entryConfig, outputConfig} = require("./webpack.config.shared");

const devServer = {
    static: {
        directory: path.join(__dirname, outputConfig.destPath),
    },
    historyApiFallback: true,
    port: 3000,
    https: {
        key: fs.readFileSync("cert.key"),
        cert: fs.readFileSync("cert.crt"),
        ca: fs.readFileSync("ca.crt"),
        disableHostCheck: true,
    },
};

module.exports = (_, options) => 
{
    return {
        mode: options.mode,
        entry: entryConfig,
        devServer,
        target: "web",
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
                        "style-loader",
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
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                inject: true,
                minify: false
            }),
        ]
    };
};