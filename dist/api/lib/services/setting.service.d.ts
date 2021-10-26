/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filter, Response, Setting } from '../models';
import { ServerService } from './server.service';
export declare class SettingService {
    private http;
    private serverService;
    private httpOptions;
    constructor(http: HttpClient, serverService: ServerService);
    getSettings(filter?: Filter): Observable<Response<Setting[], 'settings'>>;
    getSetting(name: string, filter?: Filter): Observable<Response<Setting, 'setting'>>;
    updateSetting(setting: Setting, filter?: Filter): Observable<Response<Setting, 'setting'>>;
    getDefaults(filter?: Filter): Observable<Response<Setting[], 'settings'>>;
}
