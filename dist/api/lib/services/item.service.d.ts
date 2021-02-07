/**
 * @license
 *
 * Copyright (C) 2020 narra.eu
 *
 * This file is part of Narra Angular API.
 *
 * Narra Angular API is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Narra Angular API is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Narra Angular API. If not, see <http://www.gnu.org/licenses/>.
 *
 * Authors: Michal Mocnak <michal@narra.eu>
 */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';
import { Candidate, Item, Meta, Proxy, Query, Response } from '../models';
export declare class ItemService {
    private http;
    private serverService;
    private httpOptions;
    constructor(http: HttpClient, serverService: ServerService);
    check(url: string, query?: Query): Observable<Response<Proxy[], 'proxies'>>;
    addItems(candidates: Candidate[], query?: Query): Observable<Response<string[], 'ids'>>;
    getItem(id: string, query?: Query): Observable<Response<Item, 'item'>>;
    addItemMeta(id: string, meta: Pick<Meta, 'name' | 'value' | 'generator'>, query?: Query): Observable<Response<Meta, 'metadata'>>;
    updateItemMeta(id: string, meta: Pick<Meta, 'name' | 'value' | 'generator'>, query?: Query): Observable<Response<Meta, 'metadata'>>;
    deleteItemMeta(id: string, meta: Pick<Meta, 'name' | 'generator'>): Observable<Response<string, 'name'>>;
}
