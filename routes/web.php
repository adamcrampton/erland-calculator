<?php

use Illuminate\Support\Facades\Route;

// Top level pages
Route::get('/', 'App\Http\Controllers\IndexController@index')->name('index');

// Toolkit sections
Route::group(['prefix' => 'toolkit', 'as' => 'toolkit.'], function() {
    Route::group(['prefix' => 'calculators', 'as' => 'calculators.'], function() { 
        Route::get('/erlang', 'App\Http\Controllers\Toolkit\Calculators\ErlangCalculatorController@index')->name('erlang.index');
    });
});
