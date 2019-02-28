import { Injectable } from '@angular/core';
import { CrudService } from '@services/common/crud.service';
import { User } from '@models/user.model';
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
    _http: HttpClient
  ) {
    super(_http);
    this.setUrl('users');
  }
}
