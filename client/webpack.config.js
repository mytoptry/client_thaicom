const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    },
    devServer: {
        setupMiddlewares: (devServer) => {
            devServer.app.use((req, res, next) => {
                // console.log(`Request received for: ${req.url}`)
                next()
            })

            devServer.app.use((req, res, next) => {
                res.status(200)
                next()
            })
        }
    }
}