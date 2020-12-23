const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.js('resources/js/waves.js', 'public/js')
    .js('resources/js/custom.js', 'public/js')
    .js('resources/js/sidebarmenu.js', 'public/js')
    .js('resources/js/pages/dashboards/dashboard1.js', 'public/js')
    .postCss('resources/sass/style.css', 'public/css');