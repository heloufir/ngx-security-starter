<?php

namespace App;

use Heloufir\SecurityStarter\Core\UserProfiles;
use Heloufir\SimplePassport\Helpers\CanResetPassword;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens, UserProfiles, CanResetPassword;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the list of user's roles
     *
     * @return array The user's roles array
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    public function roles(): array
    {
        $results = collect();
        foreach ($this->profiles as $profile) {
            foreach ($profile->roles as $role) {
                if (!$results->contains($role->code)) {
                    $results->push($role->code);
                }
            }
        }
        return $results->toArray();
    }
}
