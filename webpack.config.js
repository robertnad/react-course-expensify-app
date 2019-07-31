// entry -> output
// https://webpack.js.org
// node path.join

// console.log(__dirname);
// console.log(path.join(__dirname, 'public'));

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
                /* explanation: whenever there is a file with js extension
                that is outside node_modules folder, we're gonna run it
                through babel loader */
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        /* source map lets the compiler know where the original line of
        code is, since bundle.js is the only file that is ran */
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        /* live-server equivalent; contentBase tells our devServer where it
        can find our public files */
        /* historyApiFallback tells the devserver that we're gonna be handling
        routing via our client side code  */
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};