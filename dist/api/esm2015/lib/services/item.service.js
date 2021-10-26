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
export class ItemService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST check url '/v1/items/check'
    check(url, filter) {
        return this.http.post(this.serverService.query('items/check', filter), { url }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new item '/v1/items/new'
    addItems(candidates, filter) {
        return this.http.post(this.serverService.query('items/new', filter), { candidates }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET item '/v1/items/{id}'
    getItem(id, filter) {
        return this.http.get(this.serverService.query('items/' + id, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new item metadata '/v1/items/{name}/metadata/new'
    addItemMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('items/' + id + '/metadata/new', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update item metadata '/v1/items/{name}/metadata/{meta}/update'
    updateItemMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('items/' + id + '/metadata/' + meta.name + '/update', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete item metadata '/v1/items/{name}/metadata/{meta}/delete'
    deleteItemMeta(id, meta) {
        return this.http.get(this.serverService.query('items/' + id + '/metadata/' + meta.name + '/delete?generator=' + meta.generator))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
ItemService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ItemService_Factory() { return new ItemService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ServerService)); }, token: ItemService, providedIn: "root" });
ItemService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ItemService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FwaS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0QsT0FBTyxFQUFDLFVBQVUsRUFBaUIsS0FBSyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFLdkMsTUFBTSxPQUFPLFdBQVc7SUFRdEIsWUFBb0IsSUFBZ0IsRUFBVSxhQUE0QjtRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFObEUsZ0JBQVcsR0FBRztZQUNwQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkMsQ0FBQztTQUNILENBQUM7SUFHRixDQUFDO0lBRUQsbUNBQW1DO0lBQzVCLEtBQUssQ0FBQyxHQUFXLEVBQUUsTUFBZTtRQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDbkcsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVELGdDQUFnQztJQUN6QixRQUFRLENBQUMsVUFBdUIsRUFBRSxNQUFlO1FBQ3RELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4RyxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDO0lBRUQsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBQyxFQUFVLEVBQUUsTUFBZTtRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDdkUsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUdELHlEQUF5RDtJQUNsRCxXQUFXLENBQUMsRUFBVSxFQUFFLElBQWdELEVBQUUsTUFBZTtRQUM5RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsZUFBZSxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2xILElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxzRUFBc0U7SUFDL0QsY0FBYyxDQUFDLEVBQVUsRUFBRSxJQUFnRCxFQUFFLE1BQWU7UUFDakcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN2SSxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDO0lBRUQscUVBQXFFO0lBQzlELGNBQWMsQ0FBQyxFQUFVLEVBQUUsSUFBc0M7UUFDdEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsSSxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDOzs7O1lBbkVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVE8sVUFBVTtZQUdWLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT4sIEVyaWMgUm9zZW56dmVpZyA8ZXJpY0BuYXJyYS5ldT5cbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE5hcnJhIFByb2plY3RcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjArIChzZWUgQ09QWUlORyBvciBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAudHh0KVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgcmV0cnl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U2VydmVyU2VydmljZX0gZnJvbSAnLi9zZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge0NhbmRpZGF0ZSwgSXRlbSwgTGlicmFyeSwgTWV0YSwgUHJveHksIEZpbHRlciwgUmVzcG9uc2V9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge0Vycm9ySGVscGVyfSBmcm9tICcuLi9oZWxwZXJzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgaHR0cE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzZXJ2ZXJTZXJ2aWNlOiBTZXJ2ZXJTZXJ2aWNlKSB7XG4gIH1cblxuICAvLyBQT1NUIGNoZWNrIHVybCAnL3YxL2l0ZW1zL2NoZWNrJ1xuICBwdWJsaWMgY2hlY2sodXJsOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8UHJveHlbXSwgJ3Byb3hpZXMnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnaXRlbXMvY2hlY2snLCBmaWx0ZXIpLCB7IHVybCB9LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgbmV3IGl0ZW0gJy92MS9pdGVtcy9uZXcnXG4gIHB1YmxpYyBhZGRJdGVtcyhjYW5kaWRhdGVzOiBDYW5kaWRhdGVbXSwgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxzdHJpbmdbXSwgJ2V2ZW50cyc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdpdGVtcy9uZXcnLCBmaWx0ZXIpLCB7IGNhbmRpZGF0ZXMgfSwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgaXRlbSAnL3YxL2l0ZW1zL3tpZH0nXG4gIHB1YmxpYyBnZXRJdGVtKGlkOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8SXRlbSwgJ2l0ZW0nPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdpdGVtcy8nICsgaWQsIGZpbHRlcikpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cblxuICAvLyBQT1NUIG5ldyBpdGVtIG1ldGFkYXRhICcvdjEvaXRlbXMve25hbWV9L21ldGFkYXRhL25ldydcbiAgcHVibGljIGFkZEl0ZW1NZXRhKGlkOiBzdHJpbmcsIG1ldGE6IFBpY2s8TWV0YSwgJ25hbWUnIHwgJ3ZhbHVlJyB8ICdnZW5lcmF0b3InPiwgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxNZXRhLCAnbWV0YWRhdGEnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnaXRlbXMvJyArIGlkICsgJy9tZXRhZGF0YS9uZXcnLCBmaWx0ZXIpLCBtZXRhLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgdXBkYXRlIGl0ZW0gbWV0YWRhdGEgJy92MS9pdGVtcy97bmFtZX0vbWV0YWRhdGEve21ldGF9L3VwZGF0ZSdcbiAgcHVibGljIHVwZGF0ZUl0ZW1NZXRhKGlkOiBzdHJpbmcsIG1ldGE6IFBpY2s8TWV0YSwgJ25hbWUnIHwgJ3ZhbHVlJyB8ICdnZW5lcmF0b3InPiwgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxNZXRhLCAnbWV0YWRhdGEnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnaXRlbXMvJyArIGlkICsgJy9tZXRhZGF0YS8nICsgbWV0YS5uYW1lICsgJy91cGRhdGUnLCBmaWx0ZXIpLCBtZXRhLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBkZWxldGUgaXRlbSBtZXRhZGF0YSAnL3YxL2l0ZW1zL3tuYW1lfS9tZXRhZGF0YS97bWV0YX0vZGVsZXRlJ1xuICBwdWJsaWMgZGVsZXRlSXRlbU1ldGEoaWQ6IHN0cmluZywgbWV0YTogUGljazxNZXRhLCAnbmFtZScgfCAnZ2VuZXJhdG9yJz4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPHN0cmluZywgJ25hbWUnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdpdGVtcy8nICsgaWQgKyAnL21ldGFkYXRhLycgKyBtZXRhLm5hbWUgKyAnL2RlbGV0ZT9nZW5lcmF0b3I9JyArIG1ldGEuZ2VuZXJhdG9yKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cbn1cblxuIl19