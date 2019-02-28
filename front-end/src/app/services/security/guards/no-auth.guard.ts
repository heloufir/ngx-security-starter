import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { constants } from 'environments/constants';

@Injectable({
  providedIn: 'root'
})
/**
 * The guest guard
 * >> Used to give access to a specific route for the guest users 
 *    (non-authenticated user)
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class NoAuthGuard implements CanActivate {

  /**
   * Service constructor
   * 
   * @param router The router object
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private router: Router
  ) { }

  /**
   * Check if the route can be accessed or not
   * >> Check if there isn't an access token registred in the localstorage
   * 
   * @param next The next route to go into it
   * @param state The router state snapshot object
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      !localStorage.getItem(constants.access_token)
    ) {
      localStorage.removeItem(constants.access_token);
      return true;
    }
    this.router.navigate([constants.home_url]);
    return false;
  }
}
