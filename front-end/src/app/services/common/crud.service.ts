import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { environment } from 'environments/environment';
import { PartialList } from '@models/common/partial-list.model';

@Injectable({
  providedIn: 'root'
})
/**
 * The abstract CRUD service containing
 * >> Main CRUD functions: [Find], [FindById], [Save] and [Delete] functions
 *
 * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
 */
export class CrudService<T> {

  /**
   * The URL to perform into the request
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  protected url: string;

  /**
   * Request headers
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  protected headers: any;
  
  /**
   * Request options
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  protected options: any;

  /**
   * Service contructor
   *
   * @param _http The Http object
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private _http: HttpClient
  ) {
    // Set the default request options and headers
    this.headers = new Headers({ 
      'Accept': 'application/json', 
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  /**
   * Find a list of items
   * 
   * @param query The query parameters to inject into the request
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  public find(query?: {}): any {
    if (query) {
      this.options.params = query;
    } else {
      this.options.params = undefined;
    }
    return this._http.get<PartialList<T>>(this.url, this.options);
  }

  /**
   * Find an item by his id
   * 
   * @param id The item's id to retrieve
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  public findById(id: number): any {
    return this._http.get<T>(this.url + '/' + id, this.options);
  }

  /**
   * Save the item into database
   * 
   * @param model The item to save
   * @param update A flag if set to TRUE it means it's an update, otherwise it's a save
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  public save(model: any, update?: boolean): any {
    if (update) {
      return this._http.put<T>(this.url + '/' + model.id, model, this.options);
    } else {
      return this._http.post<T>(this.url, model, this.options);
    }
  }

  /**
   * Delete an item from database
   * 
   * @param model The item to delete
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  public delete(model: any): any {
    return this._http.delete<T>(this.url + '/' + model.id, this.options);
  }

  /**
   * Set the service url
   * 
   * @param url The url to execute request into it
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  setUrl(url: String): void {
    this.url = environment.rest_url + '' + url;
  }
}
