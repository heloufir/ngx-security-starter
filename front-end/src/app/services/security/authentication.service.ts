// Angular modules
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, RequestOptions, Http } from '@angular/http';

// Observable modules
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

// Environment and application constants
import { environment } from '@env/environment';
import { constants } from '@env/constants';

@Injectable({
  providedIn: 'root'
})
/**
 * The authentication services
 * >> Contains login / Logout functions
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class AuthenticationService {

  /**
   * The Oauth client id
   */
  CLIENT_ID = 2;

  /**
   * The Oauth client secret
   */
  CLIENT_SECRET = 'FTVgbmGmO2mE86aogjPFV3bewf7DJTr26UYjN6zh';

  /**
   * Service constructor
   * >> Here the Http object is used instead of HttpClient, because an interceptor is 
   *    listening to all the HttpClient request to add into it the Oauth Access Token,
   *    here we don't need the access token to be injected.
   * 
   * @param _http The Http object 
   * @param _router The router object
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private _http: Http,
    private _router: Router
  ) { }

  /**
   * Obtain the access token from the Oauth server
   * 
   * @param loginData Object containing the username and password data
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  obtainAccessToken(loginData: any): Observable<any> {
    const params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('grant_type', 'password');
    params.append('client_id', '' + this.CLIENT_ID);

    const headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET)
    });
    const options = new RequestOptions({ headers: headers });
    return this._http.post(environment.auth_url + 'token', params.toString(), options)
      .map((res: any) => res.json())
      .catch(err => ErrorObservable.create(err));
  }

  /**
   * Save the token into the localstorage
   * 
   * @param token The access token to save
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  saveToken(token: string): void {
    localStorage.setItem(constants.access_token, token);
  }

  /**
   * Remove the access token from localstorage and redirect to authentication route
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  logout(): void {
    localStorage.removeItem(constants.access_token);
    this._router.navigateByUrl(constants.auth_url);
  }
}
