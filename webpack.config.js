module.exports = {
	context: __dirname,
	entry: './src/main.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: 'build',
	},
	devServer: {
		inline: true,  // hot reloading without webpack status bar
		port: 1111,    // channge to whatever
	},
	devtool: 'source-map',
	module: {
		preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: './',
      }
    ],
		loaders: [ 
			{
				test: /\.js$/,
				exlude: /node_modules/,
				loader: 'babel',
			},
			{
				test: /\.css$/, // for any third-party stylesheets
				exclude: /node_modules/,
				loaders: ["style", "css", "postcss"]
			},
			{
				test: /\.scss$/, // for my scss sheets. imported in App.js
				exclude: /node_modules/,
				loaders: ["style", "css", "sass"]
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
			},
			{
        test: /\.json$/,
        loader: 'json'
      }
		]
	},
	node: {
	    console: true,
	    fs: 'empty',
	    net: 'empty',
	    tls: 'empty'
  },
	eslint: {
    configFile: './eslint.js',
    useEslintrc: false
  },
	postcss: function () {
        return [precss, autoprefixer];
   }
}