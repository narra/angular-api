/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';
import { Candidate, Item, Meta, Proxy, Filter, Response } from '../models';
export declare class ItemService {
    private http;
    private serverService;
    private httpOptions;
    constructor(http: HttpClient, serverService: ServerService);
    check(url: string, filter?: Filter): Observable<Response<Proxy[], 'proxies'>>;
    addItems(candidates: Candidate[], filter?: Filter): Observable<Response<string[], 'events'>>;
    getItem(id: string, filter?: Filter): Observable<Response<Item, 'item'>>;
    addItemMeta(id: string, meta: Pick<Meta, 'name' | 'value' | 'generator'>, filter?: Filter): Observable<Response<Meta, 'metadata'>>;
    updateItemMeta(id: string, meta: Pick<Meta, 'name' | 'value' | 'generator'>, filter?: Filter): Observable<Response<Meta, 'metadata'>>;
    deleteItemMeta(id: string, meta: Pick<Meta, 'name' | 'generator'>): Observable<Response<string, 'name'>>;
}
