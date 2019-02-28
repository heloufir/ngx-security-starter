// Application models
import { Profile } from './profile.model';

/**
 * The role model definition
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class Role {

    /**
     * The role's id
     */
    id: number;

    /**
     * The role's code
     */
    code: string;

    /**
     * The role's designation
     */
    designation: string;

    /**
     * The role's linked profiles
     */
    profiles: Array<Profile>;

}
