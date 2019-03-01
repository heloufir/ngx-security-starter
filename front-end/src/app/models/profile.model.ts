// Application models
import { User } from './user.model';
import { Role } from './role.model';

/**
 * The profile model definition
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class Profile {

    /**
     * The profile's id
     */
    id: number;

    /**
     * The profile's code
     */
    code: string;

    /**
     * The profile's designation
     */
    designation: string;

    /**
     * The profile's attached roles
     */
    roles: Array<Role>;

    /**
     * The profile's linked users
     */
    users: Array<User>;

    /**
     * Model constructor
     * 
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    constructor() {
        this.roles = [];
    }

}
