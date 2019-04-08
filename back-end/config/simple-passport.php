<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Recover url
    |--------------------------------------------------------------------------
    |
    | This value is the recover password url, where the user will be redirected
    | after he clicked on the forgot password email button.
    | >> To customize this value please set a new variable into the application
    |    .env file with the following name: "SP_RECOVER_URL"
    |
    */
    'recover_url' => env('SP_RECOVER_URL', 'http://localhost:4200/auth/recover/'),

    /*
    |--------------------------------------------------------------------------
    | Mail sender
    |--------------------------------------------------------------------------
    |
    | This value is the address of the sender, which be displayed in the mail
    | sent to the user after he request to recover his password or after his
    | password is recovered
    | >> To customize this value please set a new variable into the application
    |    .env file with the following name: "SP_MAIL_FROM"
    |
    */
    'mail_from' => env('SP_MAIL_FROM', 'noreply@application.com'),

    /*
    |--------------------------------------------------------------------------
    | Recover url
    |--------------------------------------------------------------------------
    |
    | This value is the name of the send, which be displayed in the mail
    | sent to the user after he request to recover his password or after his
    | password is recovered
    | >> To customize this value please set a new variable into the application
    |    .env file with the following name: "SP_MAIL_FROM_NAME"
    |
    */
    'mail_from_name' => env('SP_MAIL_FROM_NAME', 'Application'),

    /*
    |--------------------------------------------------------------------------
    | model
    |--------------------------------------------------------------------------
    |
    | The model that can use simple-passport features
    |
    */

    'model' => \App\User::class,

    /*
    |--------------------------------------------------------------------------
    | after_seconds
    |--------------------------------------------------------------------------
    |
    | How many seconds before dispatch the jobs to send mails
    |
    */

    'after_seconds' => 10,
];
