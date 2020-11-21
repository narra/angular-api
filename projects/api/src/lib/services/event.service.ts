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
import {retry, catchError} from 'rxjs/operators';
import {ServerService} from './server.service';
import {Event, Response} from '../models';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // GET events by default '/v1/events/me' possibly can be modified to admin's all '/v1/events'
  public getEvents(filter: string = 'me'): Observable<Response<Event[], 'events'>> {
    return this.http.get<any>(this.serverService.query('events/' + filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
