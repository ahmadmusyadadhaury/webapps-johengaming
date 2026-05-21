<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Fallback to support Vue Router History Mode
Route::fallback(function () {
    return view('welcome');
});
