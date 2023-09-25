const path = require('path');
module.exports = {
  entry: './wasmedge-server/index.js',
  externals: [
    {"wasi_http": "wasi_http"},
    {"http": "http"},
    {"stream": "stream"},
    {"log": "log"},
    {"util": "util"},
    {"wasi_net": "wasi_net"},
    {"std": "std"}
  ],
  output: {
    path: path.resolve('./wasmedge-server-build'),
    filename: 'index.js',
    chunkFormat: "module",
    library: {
      type: "module"
    },
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.svg$/,
        use: ["svg-url-loader"]
      }
    ]
  }
};

