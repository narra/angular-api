/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {ServerService} from './server.service';
import {Item, Library, Meta, Pagination, Project, Filter, Response, Query, Return} from '../models';
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
  public validate(name: string, filter?: Filter): Observable<Response<boolean, 'validation'>> {
    return this.http.post<any>(this.serverService.query('libraries/validate', filter), {name}, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET libraries '/v1/libraries'
  public getLibraries(filter?: Filter): Observable<Response<Library[], 'libraries'>> {
    return this.http.get<any>(this.serverService.query('libraries', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET library '/v1/libraries/{id}'
  public getLibrary(id: string, filter?: Filter): Observable<Response<Library, 'library'>> {
    return this.http.get<any>(this.serverService.query('libraries/' + id, filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET library items '/v1/libraries/{id}/items'
  public getItems(id: string, filter?: Filter, pagination?: Pagination, query?: Query): Observable<Response<Item[], 'items'>> {
    return this.http.get<any>(this.serverService.query('libraries/' + id + '/items', filter, pagination, query))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST delete library items '/v1/libraries/{id}/items/delete'
  public deleteItems(id: string, items: string[]): Observable<Response<string[], 'ids'>> {
    return this.http.post<any>(this.serverService.query('libraries/' + id + '/items/delete'), {items}, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST new library '/v1/libraries/new'
  public addLibrary(library: Library, filter?: Filter): Observable<Response<Library, 'library'>> {
    return this.http.post<any>(this.serverService.query('libraries/new', filter), library, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST update library '/v1/libraries/{id}/update'
  public updateLibrary(library: Library, filter?: Filter): Observable<Response<Library, 'library'>> {
    return this.http.post<any>(this.serverService.query('libraries/' + library.id + '/update', filter), library, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET clean library '/v1/libraries/{id}/clean'
  public cleanLibrary(id: string): Observable<Response<string, 'id'>> {
    return this.http.get<any>(this.serverService.query('libraries/' + id + '/clean'))
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

  // POST export project '/v1/libraries/{id}/export'
  public exportLibrary(id: string): Observable<Response<Return, 'return'>> {
    return this.http.get<any>(this.serverService.query('libraries/' + id + '/export'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST import library '/v1/libraries/{id}/import'
  public importLibrary(id: string, file: File): Observable<any> {
    // prepare data
    const uploadData = new FormData();
    // set file
    uploadData.append('file', file);
    // upload
    return this.http.post<any>(this.serverService.query('libraries/' + id + '/import'), uploadData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      retry(1),
      catchError(ErrorHelper.handleError)
    );
  }

  // POST new library metadata '/v1/libraries/{name}/metadata/new'
  public addLibraryMeta(id: string, meta: Pick<Meta, 'name' | 'value'>, filter?: Filter): Observable<Response<Meta, 'metadata'>> {
    return this.http.post<any>(this.serverService.query('libraries/' + id + '/metadata/new', filter), meta, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST update library metadata '/v1/libraries/{name}/metadata/{meta}/update'
  public updateLibraryMeta(id: string, meta: Pick<Meta, 'name' | 'value'>, filter?: Filter): Observable<Response<Meta, 'metadata'>> {
    return this.http.post<any>(this.serverService.query('libraries/' + id + '/metadata/' + meta.name + '/update', filter), meta, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET delete library metadata '/v1/libraries/{name}/metadata/{meta}/delete'
  public deleteLibraryMeta(id: string, meta: Pick<Meta, 'name'>): Observable<Response<string, 'name'>> {
    return this.http.get<any>(this.serverService.query('libraries/' + id + '/metadata/' + meta.name + '/delete'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
