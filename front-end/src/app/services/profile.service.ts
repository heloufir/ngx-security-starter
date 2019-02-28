// Angular modules
import { Injectable } from '@angular/core';

// CRUD Abstract service
import { CrudService } from '@services/common/crud.service';

// Application models
import { Profile } from '@models/profile.model';

// Angular Http client
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * The profile model services
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class ProfileService extends CrudService<Profile> {

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
    this.setUrl('profiles');
  }
}
