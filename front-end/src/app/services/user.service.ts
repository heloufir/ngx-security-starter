// Angular modules
import { Injectable } from '@angular/core';

// CRUD Abstract service
import { CrudService } from '@services/common/crud.service';

// Application models
import { User } from '@models/user.model';

// Angular Http client
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * The user model services
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class UserService extends CrudService<User> {

  /**
   * Service constructor
   *
   * @param _http The Http object
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private __http: HttpClient
  ) {
    super(__http);
    this.setUrl('users');
  }

  /**
   * @override
   * Save the item into database
   * 
   * @param model The item to save
   * @param update A flag if set to TRUE it means it's an update, otherwise it's a save
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  public save(model: any, update?: boolean): any {
    this.options.params = undefined;
    if (update) {
      return this.__http.post<User>(this.url + '/' + model.get('id'), model, this.options);
    } else {
      return this.__http.post<User>(this.url, model, this.options);
    }
  }
}
