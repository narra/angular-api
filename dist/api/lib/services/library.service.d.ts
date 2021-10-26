/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';
import { Item, Library, Meta, Pagination, Filter, Response, Query } from '../models';
export declare class LibraryService {
    private http;
    private serverService;
    private httpOptions;
    constructor(http: HttpClient, serverService: ServerService);
    validate(name: string, filter?: Filter): Observable<Response<boolean, 'validation'>>;
    getLibraries(filter?: Filter): Observable<Response<Library[], 'libraries'>>;
    getLibrary(id: string, filter?: Filter): Observable<Response<Library, 'library'>>;
    getItems(id: string, filter?: Filter, pagination?: Pagination, query?: Query): Observable<Response<Item[], 'items'>>;
    deleteItems(id: string, items: string[]): Observable<Response<string[], 'ids'>>;
    addLibrary(library: Library, filter?: Filter): Observable<Response<Library, 'library'>>;
    updateLibrary(library: Library, filter?: Filter): Observable<Response<Library, 'library'>>;
    cleanLibrary(id: string): Observable<Response<string, 'id'>>;
    deleteLibrary(id: string): Observable<Response<string, 'id'>>;
    addLibraryMeta(id: string, meta: Pick<Meta, 'name' | 'value'>, filter?: Filter): Observable<Response<Meta, 'metadata'>>;
    updateLibraryMeta(id: string, meta: Pick<Meta, 'name' | 'value'>, filter?: Filter): Observable<Response<Meta, 'metadata'>>;
    deleteLibraryMeta(id: string, meta: Pick<Meta, 'name'>): Observable<Response<string, 'name'>>;
}
