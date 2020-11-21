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
import {Observable} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {ServerService} from './server.service';
import {Item, Library, Response} from '../models';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // POST validate '/v1/libraries/validate'
  public validate(name: string): Observable<Response<boolean, 'validation'>> {
    return this.http.post<any>(this.serverService.query('libraries/validate'), {name}, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET libraries '/v1/libraries'
  public getLibraries(): Observable<Response<Library[], 'libraries'>> {
    return this.http.get<any>(this.serverService.query('libraries'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET library '/v1/libraries/{id}'
  public getLibrary(id: string): Observable<Response<Library, 'library'>> {
    return this.http.get<any>(this.serverService.query('libraries/' + id))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET library items '/v1/libraries/{id}/items'
  public getItems(id: string): Observable<Response<Item[], 'items'>> {
    return this.http.get<any>(this.serverService.query('libraries/' + id + '/items'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST new library '/v1/libraries/new'
  public addLibrary(library: Library): Observable<Response<Library, 'library'>> {
    return this.http.post<any>(this.serverService.query('libraries/new'), library, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST update library '/v1/libraries/{id}/update'
  public updateLibrary(library: Library): Observable<Response<Library, 'library'>> {
    return this.http.post<any>(this.serverService.query('libraries/' + library.id + '/update'), library, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET delete library '/v1/libraries/{id}/delete'
  public deleteLibrary(id: string): Observable<Response<string, 'id'>> {
    return this.http.get<any>(this.serverService.query('libraries/' + id + '/delete'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
