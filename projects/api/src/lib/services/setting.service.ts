/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
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
