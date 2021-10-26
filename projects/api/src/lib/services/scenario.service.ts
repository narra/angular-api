/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {ServerService} from './server.service';
import {Response, Scenario} from '../models';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // GET scenarios '/v1/scenarios'
  public getScenarios(): Observable<Response<Scenario[], 'scenarios'>> {
    return this.http.get<any>(this.serverService.query('scenarios'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET scenario '/v1/scenarios/{id}'
  public getScenario(id: string): Observable<Response<Scenario, 'scenario'>> {
    return this.http.get<any>(this.serverService.query('scenarios/' + id))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
