/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module, Filter, Response, Log} from '../models';
import {catchError, retry} from 'rxjs/operators';
import {ServerService} from './server.service';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // GET version '/v1/system/version'
  public getVersion(filter?: Filter): Observable<Response<string, 'version'>> {
    return this.http.get<any>(this.serverService.query('system/version', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET modules '/v1/system/modules'
  public getModules(filter?: Filter): Observable<Response<Module[], 'modules'>> {
    return this.http.get<any>(this.serverService.query('system/modules', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET log '/v1/system/logs'
  public getLogs(filter?: Filter): Observable<Response<Log[], 'logs'>> {
    return this.http.get<any>(this.serverService.query('system/logs', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
