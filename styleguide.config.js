const path = require("path");

module.exports = {
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				}
			]
		}
	},
	title: "React Button Shine Library",
	styleguideDir: "docs"
};
