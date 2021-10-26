/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connector, Filter, Response } from '../models';
import { ServerService } from './server.service';
export declare class ConnectorService {
    private http;
    private serverService;
    constructor(http: HttpClient, serverService: ServerService);
    getConnectors(filter?: Filter): Observable<Response<Connector[], 'connectors'>>;
}
