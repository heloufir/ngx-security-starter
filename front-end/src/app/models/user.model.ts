import { Profile } from './profile.model';

/**
 * The user model definition
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class User {

    /**
     * The user's id
     */
    id: number;

    /**
     * The user's full name
     */
    name: string;

    /**
     * The user's email address
     */
    email: string;

    /**
     * The user's password
     */
    password: string;

    /**
     * The user's remember token
     */
    remember_token: string;

    /**
     * The user's created date
     */
    created_at: Date;

    /**
     * The user's last update date
     */
    updated_at: Date;

    /**
     * The user's password token
     */
    password_token: string;

    /**
     * Profiles attached to the user
     */
    profiles: Array<Profile>;

    /**
     * Model constructor
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    constructor() {
        this.profiles = [];
    }

}
