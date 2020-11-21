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
