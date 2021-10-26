/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Module, Filter, Response, Log } from '../models';
import { ServerService } from './server.service';
export declare class SystemService {
    private http;
    private serverService;
    constructor(http: HttpClient, serverService: ServerService);
    getVersion(filter?: Filter): Observable<Response<string, 'version'>>;
    getModules(filter?: Filter): Observable<Response<Module[], 'modules'>>;
    getLogs(filter?: Filter): Observable<Response<Log[], 'logs'>>;
}
