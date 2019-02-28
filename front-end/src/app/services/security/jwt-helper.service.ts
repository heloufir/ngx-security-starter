import { Injectable } from '@angular/core';
import { constants } from '@env/constants';

@Injectable({
  providedIn: 'root'
})
/**
 * A JWT utilities methods used in the application
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class JwtHelperService {

  /**
   * Decode the base64 token passed in parameters
   * 
   * @param token The base64 access token to decode
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  private decode(token: string): any {
    if (token !== null || token !== undefined) {
      const base64Url = token.split('.')[1];
      if (base64Url === null || base64Url === undefined) {
        return null;
      }
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    } else {
      return null;
    }
  }

  /**
   * Get the authenticated user's email address from the access token
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  email(): string {
    const token = localStorage.getItem(constants.access_token);
    if (token === null || token === undefined) {
      return null;
    } else {
      const decoded = this.decode(token);
      return (decoded === null) ? null : decoded.email;
    }
  }

  /**
   * Get the authenticated user's name from the access token
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  name(): string {
    const token = localStorage.getItem(constants.access_token);
    if (token === null || token === undefined) {
      return null;
    } else {
      const decoded = this.decode(token);
      return (decoded === null) ? null : decoded.name;
    }
  }

  /**
   * Get the authenticated user's id from the access token
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  id(): string {
    const token = localStorage.getItem(constants.access_token);
    if (token === null || token === undefined) {
      return null;
    } else {
      const decoded = this.decode(token);
      return (decoded === null) ? null : decoded.sub;
    }
  }

  /**
   * Get the authenticated user's roles from the access token
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  userRoles(): Array<string> {
    const token = localStorage.getItem(constants.access_token);
    if (token === null || token === undefined) {
      return [];
    } else {
      const decoded = this.decode(token);
      return (decoded === null) ? [] : decoded.roles;
    }
  }

  /**
   * Check if logged user has an authority based on a String
   * 
   * @param role The authority's code
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  hasRole(role: String): Boolean {
    let result = false;
    const authorities: Array<String> = this.userRoles();
    authorities.forEach((authority: String) => {
      if (authority === role) {
        result = true;
      }
    });
    return result;
  }

}
