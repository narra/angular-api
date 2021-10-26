/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FwaS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0QsT0FBTyxFQUFDLFVBQVUsRUFBTyxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sY0FBYztJQVF6QixZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5sRSxnQkFBVyxHQUFHO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0gsQ0FBQztJQUdGLENBQUM7SUFFRCx5Q0FBeUM7SUFDbEMsUUFBUSxDQUFDLElBQVksRUFBRSxNQUFlO1FBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pHLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBZ0M7SUFDekIsWUFBWSxD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SUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQzthQUMxRyxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDOzs7O1lBeEhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVE8sVUFBVTtZQUdWLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT4sIEVyaWMgUm9zZW56dmVpZyA8ZXJpY0BuYXJyYS5ldT5cbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE5hcnJhIFByb2plY3RcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjArIChzZWUgQ09QWUlORyBvciBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAudHh0KVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHJldHJ5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1NlcnZlclNlcnZpY2V9IGZyb20gJy4vc2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtJdGVtLCBMaWJyYXJ5LCBNZXRhLCBQYWdpbmF0aW9uLCBQcm9qZWN0LCBGaWx0ZXIsIFJlc3BvbnNlLCBRdWVyeX0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7RXJyb3JIZWxwZXJ9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMaWJyYXJ5U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBodHRwT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0pXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHNlcnZlclNlcnZpY2U6IFNlcnZlclNlcnZpY2UpIHtcbiAgfVxuXG4gIC8vIFBPU1QgdmFsaWRhdGUgJy92MS9saWJyYXJpZXMvdmFsaWRhdGUnXG4gIHB1YmxpYyB2YWxpZGF0ZShuYW1lOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8Ym9vbGVhbiwgJ3ZhbGlkYXRpb24nPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnbGlicmFyaWVzL3ZhbGlkYXRlJywgZmlsdGVyKSwge25hbWV9LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBsaWJyYXJpZXMgJy92MS9saWJyYXJpZXMnXG4gIHB1YmxpYyBnZXRMaWJyYXJpZXMoZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxMaWJyYXJ5W10sICdsaWJyYXJpZXMnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdsaWJyYXJpZXMnLCBmaWx0ZXIpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBsaWJyYXJ5ICcvdjEvbGlicmFyaWVzL3tpZH0nXG4gIHB1YmxpYyBnZXRMaWJyYXJ5KGlkOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8TGlicmFyeSwgJ2xpYnJhcnknPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdsaWJyYXJpZXMvJyArIGlkLCBmaWx0ZXIpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBsaWJyYXJ5IGl0ZW1zICcvdjEvbGlicmFyaWVzL3tpZH0vaXRlbXMnXG4gIHB1YmxpYyBnZXRJdGVtcyhpZDogc3RyaW5nLCBmaWx0ZXI/OiBGaWx0ZXIsIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uLCBxdWVyeT86IFF1ZXJ5KTogT2JzZXJ2YWJsZTxSZXNwb25zZTxJdGVtW10sICdpdGVtcyc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2xpYnJhcmllcy8nICsgaWQgKyAnL2l0ZW1zJywgZmlsdGVyLCBwYWdpbmF0aW9uLCBxdWVyeSkpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCBkZWxldGUgbGlicmFyeSBpdGVtcyAnL3YxL2xpYnJhcmllcy97aWR9L2l0ZW1zL2RlbGV0ZSdcbiAgcHVibGljIGRlbGV0ZUl0ZW1zKGlkOiBzdHJpbmcsIGl0ZW1zOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8UmVzcG9uc2U8c3RyaW5nW10sICdpZHMnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnbGlicmFyaWVzLycgKyBpZCArICcvaXRlbXMvZGVsZXRlJyksIHtpdGVtc30sIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCBuZXcgbGlicmFyeSAnL3YxL2xpYnJhcmllcy9uZXcnXG4gIHB1YmxpYyBhZGRMaWJyYXJ5KGxpYnJhcnk6IExpYnJhcnksIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8TGlicmFyeSwgJ2xpYnJhcnknPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnbGlicmFyaWVzL25ldycsIGZpbHRlciksIGxpYnJhcnksIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCB1cGRhdGUgbGlicmFyeSAnL3YxL2xpYnJhcmllcy97aWR9L3VwZGF0ZSdcbiAgcHVibGljIHVwZGF0ZUxpYnJhcnkobGlicmFyeTogTGlicmFyeSwgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxMaWJyYXJ5LCAnbGlicmFyeSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdsaWJyYXJpZXMvJyArIGxpYnJhcnkuaWQgKyAnL3VwZGF0ZScsIGZpbHRlciksIGxpYnJhcnksIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gR0VUIGNsZWFuIGxpYnJhcnkgJy92MS9saWJyYXJpZXMve2lkfS9jbGVhbidcbiAgcHVibGljIGNsZWFuTGlicmFyeShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxzdHJpbmcsICdpZCc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2xpYnJhcmllcy8nICsgaWQgKyAnL2NsZWFuJykpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gR0VUIGRlbGV0ZSBsaWJyYXJ5ICcvdjEvbGlicmFyaWVzL3tpZH0vZGVsZXRlJ1xuICBwdWJsaWMgZGVsZXRlTGlicmFyeShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxzdHJpbmcsICdpZCc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2xpYnJhcmllcy8nICsgaWQgKyAnL2RlbGV0ZScpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgbmV3IGxpYnJhcnkgbWV0YWRhdGEgJy92MS9saWJyYXJpZXMve25hbWV9L21ldGFkYXRhL25ldydcbiAgcHVibGljIGFkZExpYnJhcnlNZXRhKGlkOiBzdHJpbmcsIG1ldGE6IFBpY2s8TWV0YSwgJ25hbWUnIHwgJ3ZhbHVlJz4sIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8TWV0YSwgJ21ldGFkYXRhJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2xpYnJhcmllcy8nICsgaWQgKyAnL21ldGFkYXRhL25ldycsIGZpbHRlciksIG1ldGEsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCB1cGRhdGUgbGlicmFyeSBtZXRhZGF0YSAnL3YxL2xpYnJhcmllcy97bmFtZX0vbWV0YWRhdGEve21ldGF9L3VwZGF0ZSdcbiAgcHVibGljIHVwZGF0ZUxpYnJhcnlNZXRhKGlkOiBzdHJpbmcsIG1ldGE6IFBpY2s8TWV0YSwgJ25hbWUnIHwgJ3ZhbHVlJz4sIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8TWV0YSwgJ21ldGFkYXRhJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2xpYnJhcmllcy8nICsgaWQgKyAnL21ldGFkYXRhLycgKyBtZXRhLm5hbWUgKyAnL3VwZGF0ZScsIGZpbHRlciksIG1ldGEsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gR0VUIGRlbGV0ZSBsaWJyYXJ5IG1ldGFkYXRhICcvdjEvbGlicmFyaWVzL3tuYW1lfS9tZXRhZGF0YS97bWV0YX0vZGVsZXRlJ1xuICBwdWJsaWMgZGVsZXRlTGlicmFyeU1ldGEoaWQ6IHN0cmluZywgbWV0YTogUGljazxNZXRhLCAnbmFtZSc+KTogT2JzZXJ2YWJsZTxSZXNwb25zZTxzdHJpbmcsICduYW1lJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnbGlicmFyaWVzLycgKyBpZCArICcvbWV0YWRhdGEvJyArIG1ldGEubmFtZSArICcvZGVsZXRlJykpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG59XG4iXX0=