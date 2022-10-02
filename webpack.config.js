const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
		new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /id/),
		new FaviconsWebpackPlugin({
			logo: "./src/component/logo.png",
			inject: true,
			prefix: "assets/favicon/",
		}),
	],
};
