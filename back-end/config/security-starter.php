<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Tables
    |--------------------------------------------------------------------------
    |
    | This value represents the names of the different tables that will store
    | respectively the data of the "profiles", "roles", the join between
    | "profiles" and "roles" and the join between "users" and "profiles".
    | >> You can change these values before starting the migration command.
    |
    */
    'tables' => [
        'profiles' => 'profiles',
        'roles' => 'roles',
        'associations' => [
            'profile_roles' => 'profile_roles',
            'user_profiles' => 'user_profiles'
        ]
    ],

    /*
    |--------------------------------------------------------------------------
    | Privileges
    |--------------------------------------------------------------------------
    |
    | This value represents the roles that the use must have to access
    | respectively the profiles and roles REST resources
    | >> Please refer to [https://github.com/heloufir/security-starter] to have
    | an idea on how to use this package
    |
    */
    'privileges' => [
        'profiles' => 'any,ROLE_PROFILES',
        'roles' => 'any,ROLE_ROLES'
    ]

];