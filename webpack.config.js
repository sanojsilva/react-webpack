const path = require('path');

module.exports = {
  output: {
      path: path.resolve(__dirname, '../../../../www/html/galadarihr/frontend/js/main/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
