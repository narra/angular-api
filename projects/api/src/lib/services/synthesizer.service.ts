/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerService} from './server.service';
import {catchError, retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Filter, Response, Synthesizer} from '../models';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class SynthesizerService {

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // GET synthesizers '/v1/synthesizers'
  public getSynthesizers(filter?: Filter): Observable<Response<Synthesizer[], 'synthesizers'>> {
    return this.http.get<any>(this.serverService.query('synthesizers', filter))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
