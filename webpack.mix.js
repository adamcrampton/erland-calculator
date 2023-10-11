const mix = require('laravel-mix');

// Calculators
mix.js('resources/js/components/calculators/erlang/index.js', 'public/js/calculators/erlang')
   .react();

// Common


// SASS
mix.sass('resources/sass/app.scss', 'public/css');