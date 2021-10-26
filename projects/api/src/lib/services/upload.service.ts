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
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // POST upload '/v1/upload'
  public upload(file: File): Observable<any> {
    // prepare data
    const uploadData = new FormData();
    // set file
    uploadData.append('file', file);
    // upload
    return this.http.post<any>(this.serverService.query('upload'), uploadData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      retry(1),
      catchError(ErrorHelper.handleError)
    );
  }
}
