module.exports = {
    mode: "development",
    devtool:"inline-source-map",
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader','sass-loader']
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000
                }
              }
            ]
          }
        ]
      }
}
