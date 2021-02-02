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
import {catchError, retry} from 'rxjs/operators';
import {ServerService} from './server.service';
import {Response, User} from '../models';
import {ErrorHelper} from '../helpers';
import {RoleType} from "../enums";

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
  public getLoggedUser(): Observable<Response<User, 'user'>> {
    return this.http.get<any>(this.serverService.query('users/me'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET users '/v1/users'
  public getUsers(): Observable<Response<User[], 'users'>> {
    return this.http.get<any>(this.serverService.query('users'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET user '/v1/users/{username}'
  public getUser(username: string): Observable<Response<User, 'user'>> {
    return this.http.get<any>(this.serverService.query('users/' + username))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET delete user '/v1/users/{username}/delete'
  public deleteUser(username: string): Observable<Response<string, 'username'>> {
    return this.http.get<any>(this.serverService.query('users/' + username + '/delete'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST update user '/v1/users/{username}/update'
  public updateUser(user: User): Observable<Response<User, 'user'>> {
    return this.http.post<any>(this.serverService.query('users/' + user.username + '/update'), user, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
