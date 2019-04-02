<?php

namespace App\Core;

use App\User;
use Illuminate\Support\Collection;
use Laravel\Passport\Bridge\AccessToken as PassportAccessToken;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Key;
use Lcobucci\JWT\Signer\Rsa\Sha256;
use Lcobucci\JWT\Token;
use League\OAuth2\Server\CryptKey;

/**
 * Class AccessToken
 * >> A custom access token enhancer
 *
 * @package App\Core
 *
 * @author EL OUFIR HATIM <eloufirhatim@gmail.com>
 */
class AccessToken extends PassportAccessToken
{

    /**
     * Convert the access token to a JWT based 64 object
     *
     * @param CryptKey $privateKey The private key to encrypt/decrypt the access token
     *
     * @return Token The JWT access token
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    public function convertToJWT(CryptKey $privateKey): Token
    {
        $extra = $this->getExtraInformation(User::where('id', $this->getUserIdentifier())->first());
        return (new Builder())
            ->setAudience($this->getClient()->getIdentifier())
            ->setId($this->getIdentifier(), true)
            ->setIssuedAt(time())
            ->setNotBefore(time())
            ->setExpiration($this->getExpiryDateTime()->getTimestamp())
            ->setSubject($this->getUserIdentifier())
            ->set('scopes', $this->getScopes())
            ->set('roles', $extra->get('roles'))
            ->set('name', $extra->get('name'))
            ->set('email', $extra->get('email'))
            ->set('picture', $extra->get('picture'))
            ->sign(new Sha256(), new Key($privateKey->getKeyPath(), $privateKey->getPassPhrase()))
            ->getToken();
    }

    /**
     * Get user's extra information
     *
     * @param User $user The user object
     *
     * @return Collection The user's extra information collection
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    private function getExtraInformation(User $user): Collection
    {
        return collect([
            'roles' => $user->roles(),
            'name' => $user->name,
            'email' => $user->email,
            'picture' => $user->picture
        ]);
    }

}