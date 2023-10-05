const mix = require('laravel-mix');

// Components
mix.js('resources/js/app.js', 'public/js')
   .react();

// SASS
mix.sass('resources/sass/app.scss', 'public/css');