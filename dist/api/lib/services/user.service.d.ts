/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';
import { Filter, Response, User } from '../models';
export declare class UserService {
    private http;
    private serverService;
    private httpOptions;
    constructor(http: HttpClient, serverService: ServerService);
    getLoggedUser(filter?: Filter): Observable<Response<User, 'user'>>;
    getUsers(filter?: Filter): Observable<Response<User[], 'users'>>;
    getUser(id: string, filter?: Filter): Observable<Response<User, 'user'>>;
    deleteUser(id: string): Observable<Response<string, 'id'>>;
    updateUser(user: User, filter?: Filter): Observable<Response<User, 'user'>>;
}
