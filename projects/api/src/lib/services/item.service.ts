/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, mergeMap, retry} from 'rxjs/operators';
import {ServerService} from './server.service';
import {Candidate, Item, Library, Meta, Proxy, Filter, Response} from '../models';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // POST check url '/v1/items/check'
  public check(url: string, filter?: Filter): Observable<Response<Proxy[], 'proxies'>> {
    return this.http.post<any>(this.serverService.query('items/check', filter), { url }, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST new item '/v1/items/new'
  public addItems(candidates: Candidate[], filter?: Filter): Observable<Response<string[], 'events'>> {
    return this.http.post<any>(this.serverService.query('items/new', filter), { candidates }, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET item '/v1/items/{id}'
  public getItem(id: string, filter?: Filter): Observable<Response<Item, 'item'>> {
    return this.http.get<any>(this.serverService.query('items/' + id, filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }


  // POST new item metadata '/v1/items/{name}/metadata/new'
  public addItemMeta(id: string, meta: Pick<Meta, 'name' | 'value' | 'generator'>, filter?: Filter): Observable<Response<Meta, 'metadata'>> {
    return this.http.post<any>(this.serverService.query('items/' + id + '/metadata/new', filter), meta, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST update item metadata '/v1/items/{name}/metadata/{meta}/update'
  public updateItemMeta(id: string, meta: Pick<Meta, 'name' | 'value' | 'generator'>, filter?: Filter): Observable<Response<Meta, 'metadata'>> {
    return this.http.post<any>(this.serverService.query('items/' + id + '/metadata/' + meta.name + '/update', filter), meta, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET delete item metadata '/v1/items/{name}/metadata/{meta}/delete'
  public deleteItemMeta(id: string, meta: Pick<Meta, 'name' | 'generator'>): Observable<Response<string, 'name'>> {
    return this.http.get<any>(this.serverService.query('items/' + id + '/metadata/' + meta.name + '/delete?generator=' + meta.generator))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}

