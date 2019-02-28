// Angular modules
import { Injectable } from '@angular/core';

// CRUD Abstract service
import { CrudService } from '@services/common/crud.service';

// Application models
import { Role } from '@models/role.model';

// Angular Http client
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * The role model services
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class RoleService extends CrudService<Role> {

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
    this.setUrl('roles');
  }
}
