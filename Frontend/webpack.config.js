const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootConfig = {
    mode: 'development', // 'development' 'production'
    optimization: {
        usedExports: true, // tells webpack to tree-shake
        // minimize: true,
        // minimizer: [new TerserPlugin({
        //     parallel: true
        // })],
        // splitChunks: {
        //     chunks: 'all',
        //     cacheGroups: {
        //         reactVendor: {
        //             test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
        //             name: 'vendor-react',
        //             chunks: 'all',
        //         },
        //     },
        // }
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'eval-source-map', // browser debugging
    plugins: [
        // new BundleAnalyzerPlugin({
        //     generateStatsFile: true
        // })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                        }
                    }]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ]
            }
        ]
    }
};


const indexConfig = {
    ...rootConfig,
    entry: ['./src/index.js'],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/assets/scripts'),
        publicPath: '/assets/scripts/',
        sourceMapFilename: '[name].[contenthash:8].map',
        chunkFilename: '[name].bundle.js',
    },
    plugins: [
        ...rootConfig.plugins,
        new HtmlWebpackPlugin({
            title: "gen-index",
            hash: true,
            filename: '../../index.html', //relative to root of the application
            chunks: ['vendor-react', 'main'],
            path: path.resolve(__dirname, '/assets/scripts/'),
            template: './src/index.html',
        }),
    ],
};

module.exports = [
    indexConfig
];

