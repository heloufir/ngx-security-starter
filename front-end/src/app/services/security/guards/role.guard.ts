import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { JwtHelperService } from '../jwt-helper.service';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
/**
 * The role guard 
 * >> Used to give access to a specific route for the authenticated users
 *    having a specific list of roles
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class RoleGuard implements CanActivate {

  /**
   * Service constructor
   * 
   * @param router The router object
   * @param authenticationService The authentication service
   * @param jwtHelper The jwthelper object
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    public router: Router,
    private authenticationService: AuthenticationService,
    private jwtHelper: JwtHelperService
  ) { }

  /**
   * Check if the route can be accessed or not
   * >> Check if the access token registred into the localstorage contains
   *    the authorized roles
   * 
   * @param route The route object
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data.expectedRoles;
    const expectedRolesType = route.data.expectedRolesType || 'any';
    const userRoles = this.jwtHelper.userRoles();
    if (userRoles === null) {
      this.authenticationService.logout();
      return false;
    }
    const flag = this.checkRoles(expectedRoles, userRoles, expectedRolesType);
    if (!flag) {
      this.authenticationService.logout();
      return false;
    } else {
      return true;
    }
  }

  /**
   * Check roles based on 'expected roles', 'user roles' and 'type' (can be 'any' or 'all')
   *
   * @param a1 The expected roles that user need to have
   * @param a2 The user's roles
   * @param type The selected type, can be either 'any' or 'all'
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  checkRoles(a1: Array<string>, a2: Array<string>, type: string): boolean {
    let result = false;
    switch (type) {
      case 'any':
        result = this.anyRole(a1, a2);
        break;
      case 'all':
        result = this.allRole(a1, a2);
        break;
    }
    return result;
  }

  /**
   * Check if 'a2' array contains any of the 'a1' roles
   * 
   * @param a1 The expected roles that user need to have
   * @param a2 The user's roles
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  private anyRole(a1: Array<string>, a2: Array<string>): boolean {
    let result = false;
    a1.forEach((i1: string) => {
      if (a2.indexOf(i1) !== -1) {
        result = true;
      }
    });
    return result;
  }

  /**
   * Check if 'a2' array contains all the 'a1' roles
   * 
   * @param a1 The expected roles that user need to have
   * @param a2 The user's roles
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  private allRole(a1: Array<string>, a2: Array<string>): boolean {
    let count = 0;
    a1.forEach((i1: string) => {
      if (a2.indexOf(i1) !== -1) {
        count++;
      }
    });
    return a1.length === count;
  }

}
