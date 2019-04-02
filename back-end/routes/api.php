<?php

Route::resource('users', 'UserController')
    ->except(['create', 'edit', 'update'])
    ->middleware(['auth:api', 'roles:ROLE_USERS']);

// IMPORTANT: The update() function is override here because the HTTP PUT request does not
//            accept formData object from the HTTP request (only POST does)
Route::post('users/{user}', 'UserController@update')
    ->middleware(['auth:api', 'roles:ROLE_USERS']);
