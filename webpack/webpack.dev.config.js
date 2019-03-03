const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Config directories
const PROJECT_ROOT = path.resolve(__dirname, '..');
const BUILD_DIR = path.resolve(__dirname, '..', 'dist');

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = [PROJECT_ROOT];

module.exports =
    {
        entry: {
            app: path.join(PROJECT_ROOT, 'src', 'index.tsx')
        },
        output: {
            path: BUILD_DIR,
            filename: '[name].bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {loader: 'style-loader'},
                        {loader: 'css-loader'}
                    ],
                    include: [path.resolve(PROJECT_ROOT, "node_modules")]
                },
                {
                    test: /\.css$/,
                    use: [
                        {loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {modules: true, camelCase: true, localIdentName: '[name]__[local]___[hash:base64:5]'}
                        }
                    ],
                    include: [
                        defaultInclude
                    ],
                    exclude: [
                        path.resolve(PROJECT_ROOT, "node_modules")
                    ]
                },
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                {
                    test: /\.tsx?$/,
                    loader: "awesome-typescript-loader"
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {
                    enforce: "pre", test: /\.js$/,
                    loader: "source-map-loader"
                },
                {
                    test: /\.(jpe?g|png|gif|ico)$/,
                    use: [{loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]'}],
                    include: [path.resolve(PROJECT_ROOT, "assets")]
                },
                {
                    test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
                    use: [{loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]'}],
                    include: [path.resolve(PROJECT_ROOT, "assets", 'fonts')]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
              favicon: path.resolve(PROJECT_ROOT, 'assets', 'icons', 'icon.ico')
            })
        ]
    };