/**
 * @license
 *
 * Copyright (C) 2020 narra.eu
 *
 * This file is part of Narra Angular API.
 *
 * Narra Angular API is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Narra Angular API is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Narra Angular API. If not, see <http://www.gnu.org/licenses/>.
 *
 * Authors: Michal Mocnak <michal@narra.eu>
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

