/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import  {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Action, Filter, Response} from '../models';
import {ServerService} from './server.service';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // GET actions '/v1/actions'
  public getActions(filter?: Filter): Observable<Response<Action[], 'actions'>> {
    return this.http.get<any>(this.serverService.query('actions', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST perform action '/v1/action/:identifier/perform'
  public performAction(items: string[], action: Action, filter?: Filter): Observable<Response<Action, 'action'>> {
    return this.http.post<any>(this.serverService.query(`actions/${action.identifier}/perform`, filter), { items }, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
