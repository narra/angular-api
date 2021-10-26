/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {ServerService} from './server.service';
import {Event, Filter, Response} from '../models';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // GET events by default '/v1/events/me' possibly can be modified to admin's all '/v1/events'
  public getEvents(selection: string = 'me', filter?: Filter): Observable<Response<Event[], 'events'>> {
    return this.http.get<any>(this.serverService.query('events/' + selection, filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
