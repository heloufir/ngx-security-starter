<?php

namespace App\Core;

use League\OAuth2\Server\Entities\ClientEntityInterface;
use Laravel\Passport\Bridge\AccessTokenRepository as PassportAccessTokenRepository;

/**
 * Class AccessTokenRepository
 * >> Register the custom access token enhancer
 *
 * @package App\Core
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
class AccessTokenRepository extends PassportAccessTokenRepository
{

    /**
     * Get the new customized token
     *
     * @param ClientEntityInterface $clientEntity The client entity interface
     * @param array $scopes The scope array
     * @param null $userIdentifier The user identifier (if exists)
     *
     * @return AccessToken The customized access token
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    public function getNewToken(ClientEntityInterface $clientEntity, array $scopes, $userIdentifier = null)
    {
        return new AccessToken($userIdentifier, $scopes);
    }

}