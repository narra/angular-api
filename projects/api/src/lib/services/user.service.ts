/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ServerService} from './server.service';
import {Filter, Response, User} from '../models';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // GET logged user '/v1/users/me'
  public getLoggedUser(filter?: Filter): Observable<Response<User, 'user'>> {
    return this.http.get<any>(this.serverService.query('users/me', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET users '/v1/users'
  public getUsers(filter?: Filter): Observable<Response<User[], 'users'>> {
    return this.http.get<any>(this.serverService.query('users', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET user '/v1/users/{email}'
  public getUser(email: string, filter?: Filter): Observable<Response<User, 'user'>> {
    return this.http.get<any>(this.serverService.query('users/' + email, filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET delete user '/v1/users/{email}/delete'
  public deleteUser(email: string): Observable<Response<string, 'email'>> {
    return this.http.get<any>(this.serverService.query('users/' + email + '/delete'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST update user '/v1/users/{email}/update'
  public updateUser(user: User, filter?: Filter): Observable<Response<User, 'user'>> {
    return this.http.post<any>(this.serverService.query('users/' + user.email + '/update', filter), user, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
