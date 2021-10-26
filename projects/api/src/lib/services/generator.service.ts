/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ServerService} from './server.service';
import {Generator, Filter, Response} from '../models';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // GET generators '/v1/generators'
  public getGenerators(filter?: Filter): Observable<Response<Generator[], 'generators'>> {
    return this.http.get<any>(this.serverService.query('generators', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
