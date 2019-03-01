<?php

Route::resource('users', 'UserController')
    ->except(['create', 'edit'])
    ->middleware(['auth:api', 'roles:ROLE_USERS']);
