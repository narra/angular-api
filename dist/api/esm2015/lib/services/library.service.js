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
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ServerService } from './server.service';
import { ErrorHelper } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./server.service";
export class LibraryService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST validate '/v1/libraries/validate'
    validate(name, filter) {
        return this.http.post(this.serverService.query('libraries/validate', filter), { name }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET libraries '/v1/libraries'
    getLibraries(filter) {
        return this.http.get(this.serverService.query('libraries', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET library '/v1/libraries/{id}'
    getLibrary(id, filter) {
        return this.http.get(this.serverService.query('libraries/' + id, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET library items '/v1/libraries/{id}/items'
    getItems(id, filter, pagination, query) {
        return this.http.get(this.serverService.query('libraries/' + id + '/items', filter, pagination, query))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST delete library items '/v1/libraries/{id}/items/delete'
    deleteItems(id, items) {
        return this.http.post(this.serverService.query('libraries/' + id + '/items/delete'), { items }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new library '/v1/libraries/new'
    addLibrary(library, filter) {
        return this.http.post(this.serverService.query('libraries/new', filter), library, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update library '/v1/libraries/{id}/update'
    updateLibrary(library, filter) {
        return this.http.post(this.serverService.query('libraries/' + library.id + '/update', filter), library, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET clean library '/v1/libraries/{id}/clean'
    cleanLibrary(id) {
        return this.http.get(this.serverService.query('libraries/' + id + '/clean'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete library '/v1/libraries/{id}/delete'
    deleteLibrary(id) {
        return this.http.get(this.serverService.query('libraries/' + id + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new library metadata '/v1/libraries/{name}/metadata/new'
    addLibraryMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('libraries/' + id + '/metadata/new', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update library metadata '/v1/libraries/{name}/metadata/{meta}/update'
    updateLibraryMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('libraries/' + id + '/metadata/' + meta.name + '/update', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete library metadata '/v1/libraries/{name}/metadata/{meta}/delete'
    deleteLibraryMeta(id, meta) {
        return this.http.get(this.serverService.query('libraries/' + id + '/metadata/' + meta.name + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
LibraryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LibraryService_Factory() { return new LibraryService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ServerService)); }, token: LibraryService, providedIn: "root" });
LibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LibraryService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FwaS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0QsT0FBTyxFQUFDLFVBQVUsRUFBTyxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sY0FBYztJQVF6QixZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5sRSxnQkFBVyxHQUFHO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0gsQ0FBQztJQUdGLENBQUM7SUFFRCx5Q0FBeUM7SUFDbEMsUUFBUSxDQUFDLElBQVksRUFBRSxNQUFlO1FBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pHLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxn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LElBQXdCO1FBQzNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQzthQUMxRyxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDOzs7O1lBeEhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVE8sVUFBVTtZQUdWLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIG5hcnJhLmV1XG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgTmFycmEgQW5ndWxhciBBUEkuXG4gKlxuICogTmFycmEgQW5ndWxhciBBUEkgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIE5hcnJhIEFuZ3VsYXIgQVBJIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBOYXJyYSBBbmd1bGFyIEFQSS4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEF1dGhvcnM6IE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCByZXRyeX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTZXJ2ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZlci5zZXJ2aWNlJztcbmltcG9ydCB7SXRlbSwgTGlicmFyeSwgTWV0YSwgUGFnaW5hdGlvbiwgUHJvamVjdCwgRmlsdGVyLCBSZXNwb25zZSwgUXVlcnl9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge0Vycm9ySGVscGVyfSBmcm9tICcuLi9oZWxwZXJzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGlicmFyeVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgaHR0cE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzZXJ2ZXJTZXJ2aWNlOiBTZXJ2ZXJTZXJ2aWNlKSB7XG4gIH1cblxuICAvLyBQT1NUIHZhbGlkYXRlICcvdjEvbGlicmFyaWVzL3ZhbGlkYXRlJ1xuICBwdWJsaWMgdmFsaWRhdGUobmFtZTogc3RyaW5nLCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPGJvb2xlYW4sICd2YWxpZGF0aW9uJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2xpYnJhcmllcy92YWxpZGF0ZScsIGZpbHRlciksIHtuYW1lfSwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgbGlicmFyaWVzICcvdjEvbGlicmFyaWVzJ1xuICBwdWJsaWMgZ2V0TGlicmFyaWVzKGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8TGlicmFyeVtdLCAnbGlicmFyaWVzJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnbGlicmFyaWVzJywgZmlsdGVyKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgbGlicmFyeSAnL3YxL2xpYnJhcmllcy97aWR9J1xuICBwdWJsaWMgZ2V0TGlicmFyeShpZDogc3RyaW5nLCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPExpYnJhcnksICdsaWJyYXJ5Jz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnbGlicmFyaWVzLycgKyBpZCwgZmlsdGVyKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgbGlicmFyeSBpdGVtcyAnL3YxL2xpYnJhcmllcy97aWR9L2l0ZW1zJ1xuICBwdWJsaWMgZ2V0SXRlbXMoaWQ6IHN0cmluZywgZmlsdGVyPzogRmlsdGVyLCBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbiwgcXVlcnk/OiBRdWVyeSk6IE9ic2VydmFibGU8UmVzcG9uc2U8SXRlbVtdLCAnaXRlbXMnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdsaWJyYXJpZXMvJyArIGlkICsgJy9pdGVtcycsIGZpbHRlciwgcGFnaW5hdGlvbiwgcXVlcnkpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgZGVsZXRlIGxpYnJhcnkgaXRlbXMgJy92MS9saWJyYXJpZXMve2lkfS9pdGVtcy9kZWxldGUnXG4gIHB1YmxpYyBkZWxldGVJdGVtcyhpZDogc3RyaW5nLCBpdGVtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPHN0cmluZ1tdLCAnaWRzJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2xpYnJhcmllcy8nICsgaWQgKyAnL2l0ZW1zL2RlbGV0ZScpLCB7aXRlbXN9LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgbmV3IGxpYnJhcnkgJy92MS9saWJyYXJpZXMvbmV3J1xuICBwdWJsaWMgYWRkTGlicmFyeShsaWJyYXJ5OiBMaWJyYXJ5LCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPExpYnJhcnksICdsaWJyYXJ5Jz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2xpYnJhcmllcy9uZXcnLCBmaWx0ZXIpLCBsaWJyYXJ5LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgdXBkYXRlIGxpYnJhcnkgJy92MS9saWJyYXJpZXMve2lkfS91cGRhdGUnXG4gIHB1YmxpYyB1cGRhdGVMaWJyYXJ5KGxpYnJhcnk6IExpYnJhcnksIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8TGlicmFyeSwgJ2xpYnJhcnknPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnbGlicmFyaWVzLycgKyBsaWJyYXJ5LmlkICsgJy91cGRhdGUnLCBmaWx0ZXIpLCBsaWJyYXJ5LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBjbGVhbiBsaWJyYXJ5ICcvdjEvbGlicmFyaWVzL3tpZH0vY2xlYW4nXG4gIHB1YmxpYyBjbGVhbkxpYnJhcnkoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U8c3RyaW5nLCAnaWQnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdsaWJyYXJpZXMvJyArIGlkICsgJy9jbGVhbicpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBkZWxldGUgbGlicmFyeSAnL3YxL2xpYnJhcmllcy97aWR9L2RlbGV0ZSdcbiAgcHVibGljIGRlbGV0ZUxpYnJhcnkoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U8c3RyaW5nLCAnaWQnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdsaWJyYXJpZXMvJyArIGlkICsgJy9kZWxldGUnKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBQT1NUIG5ldyBsaWJyYXJ5IG1ldGFkYXRhICcvdjEvbGlicmFyaWVzL3tuYW1lfS9tZXRhZGF0YS9uZXcnXG4gIHB1YmxpYyBhZGRMaWJyYXJ5TWV0YShpZDogc3RyaW5nLCBtZXRhOiBQaWNrPE1ldGEsICduYW1lJyB8ICd2YWx1ZSc+LCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPE1ldGEsICdtZXRhZGF0YSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdsaWJyYXJpZXMvJyArIGlkICsgJy9tZXRhZGF0YS9uZXcnLCBmaWx0ZXIpLCBtZXRhLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgdXBkYXRlIGxpYnJhcnkgbWV0YWRhdGEgJy92MS9saWJyYXJpZXMve25hbWV9L21ldGFkYXRhL3ttZXRhfS91cGRhdGUnXG4gIHB1YmxpYyB1cGRhdGVMaWJyYXJ5TWV0YShpZDogc3RyaW5nLCBtZXRhOiBQaWNrPE1ldGEsICduYW1lJyB8ICd2YWx1ZSc+LCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPE1ldGEsICdtZXRhZGF0YSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdsaWJyYXJpZXMvJyArIGlkICsgJy9tZXRhZGF0YS8nICsgbWV0YS5uYW1lICsgJy91cGRhdGUnLCBmaWx0ZXIpLCBtZXRhLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBkZWxldGUgbGlicmFyeSBtZXRhZGF0YSAnL3YxL2xpYnJhcmllcy97bmFtZX0vbWV0YWRhdGEve21ldGF9L2RlbGV0ZSdcbiAgcHVibGljIGRlbGV0ZUxpYnJhcnlNZXRhKGlkOiBzdHJpbmcsIG1ldGE6IFBpY2s8TWV0YSwgJ25hbWUnPik6IE9ic2VydmFibGU8UmVzcG9uc2U8c3RyaW5nLCAnbmFtZSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2xpYnJhcmllcy8nICsgaWQgKyAnL21ldGFkYXRhLycgKyBtZXRhLm5hbWUgKyAnL2RlbGV0ZScpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxufVxuIl19