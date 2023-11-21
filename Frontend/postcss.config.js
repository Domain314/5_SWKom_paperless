const tailwindcss = require('tailwindcss');
const nanocss = require('cssnano')({ preset: 'default' });
const autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [
        tailwindcss,
        nanocss,
        autoprefixer
    ],
};