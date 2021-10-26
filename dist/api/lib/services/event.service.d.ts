/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';
import { Event, Filter, Response } from '../models';
export declare class EventService {
    private http;
    private serverService;
    constructor(http: HttpClient, serverService: ServerService);
    getEvents(selection?: string, filter?: Filter): Observable<Response<Event[], 'events'>>;
}
