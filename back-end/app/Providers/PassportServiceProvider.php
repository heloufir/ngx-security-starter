<?php

namespace App\Providers;

use League\OAuth2\Server\AuthorizationServer;

/**
 * Class PassportServiceProvider
 * >> Register the custom passport repository
 *
 * @package App\Providers
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
class PassportServiceProvider extends \Laravel\Passport\PassportServiceProvider
{

    /**
     * Initialize the authorization server with the custom passport token enhancer
     *
     * @return AuthorizationServer The authorization server instance
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    public function makeAuthorizationServer()
    {
        return new AuthorizationServer(
            $this->app->make(\Laravel\Passport\Bridge\ClientRepository::class),
            $this->app->make(\App\Core\AccessTokenRepository::class),
            $this->app->make(\Laravel\Passport\Bridge\ScopeRepository::class),
            $this->makeCryptKey('private'),
            app('encrypter')->getKey()
        );
    }
}
