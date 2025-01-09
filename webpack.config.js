const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/index.js', // your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // cleans the output directory
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'], // Ensure Webpack resolves imports relative to the project root
    fallback: {
      "path": require.resolve("path-browserify") // Ensure this line is present
    },
    alias: {
      '@base': path.resolve(__dirname, 'src'),
      '@root': path.resolve(__dirname)
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Removed invalid options
          }
        }
      }
      // Add any loaders you need (e.g., Babel, CSS)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your template
      filename: 'index.html',       // Output filename
      inject: true,                 // Automatically injects scripts
    }),
  ],
  devtool: 'inline-source-map', // Optional: for easier debugging
  devServer: {
    static: './dist',
  },
  stats: {
    errors: 'errors-only', // Only show errors in the output
    children: true // Show details for child compilations
  }
};
