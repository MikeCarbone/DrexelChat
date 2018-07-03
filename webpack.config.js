var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './js/app.js',
	output: {
		path: __dirname,
		filename: 'js/bundle.js'
	},
	watch: true,
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
};