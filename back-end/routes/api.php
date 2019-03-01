<?php

Route::resource('users', 'UserController')
    ->except(['create', 'edit'])
    ->middleware(['roles:ROLE_USERS']);
