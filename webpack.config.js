/*const path = require('path');

module.exports= {
	entry: './js/index.js',
	output: {
		path: path.resolve(__dirname,'./js/'),
		filename: 'bundle.js'
	},
	devServer: {
		inline: true, 
		port: 7777
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					path.resolve(__dirname, 'node-modules')
				],
				loader: 'babel-loader',
			}
		]
	}
}*/
module.exports= {
	entry:'./js/index.js',
	output: {
		path: __dirname+'/js',
		filename: 'build.js'
	},
	devServer: {
		inline: true,
		port: 7777,
		historyApiFallback: true
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react', 'stage-2']
				}
			}
		]
	}
}