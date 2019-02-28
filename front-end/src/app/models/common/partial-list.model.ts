/**
 * A partial list that will contains a list of paginated data
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class PartialList<T> {

    /**
     * The paginated data list
     */
    data: Array<T>;

    /**
     * Database data count 
     * >> It's the total count of all items from database
     */
    count: number;

    /**
     * The current page retrieved
     */
    page: number;

    /**
     * The current page size
     */
    size: number;
}
