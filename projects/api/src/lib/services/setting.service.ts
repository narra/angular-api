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
import {Filter, Response, Setting} from '../models';
import {catchError, map, retry} from 'rxjs/operators';
import {ServerService} from './server.service';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // GET settings '/v1/settings'
  public getSettings(filter?: Filter): Observable<Response<Setting[], 'settings'>> {
    return this.http.get<any>(this.serverService.query('settings', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET setting '/v1/settings/{name}'
  public getSetting(name: string, filter?: Filter): Observable<Response<Setting, 'setting'>> {
    return this.http.get<any>(this.serverService.query('settings/' + name, filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST update setting '/v1/settings/{name}/update'
  public updateSetting(setting: Setting, filter?: Filter): Observable<Response<Setting, 'setting'>> {
    return this.http.post<any>(this.serverService.query('settings/' + name + '/update', filter), setting, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET settings default values '/v1/settings/defaults'
  public getDefaults(filter?: Filter): Observable<Response<Setting[], 'settings'>> {
    return this.http.get<any>(this.serverService.query('settings/defaults', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
