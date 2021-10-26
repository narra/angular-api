/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Filter, Response, Return} from '../models';
import {ServerService} from './server.service';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class ReturnService {

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // GET return '/v1/returns/:id'
  public getReturn(id: string, filter?: Filter): Observable<Response<Return, 'return'>> {
    return this.http.get<any>(this.serverService.query('returns/' + id, filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
