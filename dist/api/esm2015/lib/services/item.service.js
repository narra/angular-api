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
    check(url) {
        return this.http.post(this.serverService.query('items/check'), { url }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new item '/v1/items/new'
    addItems(candidates) {
        return this.http.post(this.serverService.query('items/new'), { candidates }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET item '/v1/items/{id}'
    getItem(id) {
        return this.http.get(this.serverService.query('items/' + id))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new item metadata '/v1/items/{name}/metadata/new'
    addItemMeta(id, meta) {
        return this.http.post(this.serverService.query('items/' + id + '/metadata/new'), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update item metadata '/v1/items/{name}/metadata/{meta}/update'
    updateItemMeta(id, meta) {
        return this.http.post(this.serverService.query('items/' + id + '/metadata/' + meta.name + '/update'), meta, this.httpOptions)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FwaS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0QsT0FBTyxFQUFDLFVBQVUsRUFBaUIsS0FBSyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFLdkMsTUFBTSxPQUFPLFdBQVc7SUFRdEIsWUFBb0IsSUFBZ0IsRUFBVSxhQUE0QjtRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFObEUsZ0JBQVcsR0FBRztZQUNwQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkMsQ0FBQztTQUNILENBQUM7SUFHRixDQUFDO0lBRUQsbUNBQW1DO0lBQzVCLEtBQUssQ0FBQyxHQUFXO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzNGLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBZ0M7SUFDekIsUUFBUSxDQUFDLFVBQXVCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hHLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFDLEVBQVU7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDL0QsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUdELHlEQUF5RDtJQUNsRCxXQUFXLENBQUMsRUFBVSxFQUFFLElBQWdEO1FBQzdFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxlQUFlLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMxRyxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDO0lBRUQsc0VBQXNFO0lBQy9ELGNBQWMsQ0FBQyxFQUFVLEVBQUUsSUFBZ0Q7UUFDaEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQy9ILElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxxRUFBcUU7SUFDOUQsY0FBYyxDQUFDLEVBQVUsRUFBRSxJQUFzQztRQUN0RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xJLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7Ozs7WUFuRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFUTyxVQUFVO1lBR1YsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgbmFycmEuZXVcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBOYXJyYSBBbmd1bGFyIEFQSS5cbiAqXG4gKiBOYXJyYSBBbmd1bGFyIEFQSSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogTmFycmEgQW5ndWxhciBBUEkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIE5hcnJhIEFuZ3VsYXIgQVBJLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogQXV0aG9yczogTWljaGFsIE1vY25hayA8bWljaGFsQG5hcnJhLmV1PlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgcmV0cnl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U2VydmVyU2VydmljZX0gZnJvbSAnLi9zZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge0NhbmRpZGF0ZSwgSXRlbSwgTGlicmFyeSwgTWV0YSwgUHJveHksIFJlc3BvbnNlfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtFcnJvckhlbHBlcn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcblxuICBwcml2YXRlIGh0dHBPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSlcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc2VydmVyU2VydmljZTogU2VydmVyU2VydmljZSkge1xuICB9XG5cbiAgLy8gUE9TVCBjaGVjayB1cmwgJy92MS9pdGVtcy9jaGVjaydcbiAgcHVibGljIGNoZWNrKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxQcm94eVtdLCAncHJveGllcyc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdpdGVtcy9jaGVjaycpLCB7IHVybCB9LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgbmV3IGl0ZW0gJy92MS9pdGVtcy9uZXcnXG4gIHB1YmxpYyBhZGRJdGVtcyhjYW5kaWRhdGVzOiBDYW5kaWRhdGVbXSk6IE9ic2VydmFibGU8UmVzcG9uc2U8c3RyaW5nW10sICdpZHMnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnaXRlbXMvbmV3JyksIHsgY2FuZGlkYXRlcyB9LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBpdGVtICcvdjEvaXRlbXMve2lkfSdcbiAgcHVibGljIGdldEl0ZW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U8SXRlbSwgJ2l0ZW0nPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdpdGVtcy8nICsgaWQpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG5cbiAgLy8gUE9TVCBuZXcgaXRlbSBtZXRhZGF0YSAnL3YxL2l0ZW1zL3tuYW1lfS9tZXRhZGF0YS9uZXcnXG4gIHB1YmxpYyBhZGRJdGVtTWV0YShpZDogc3RyaW5nLCBtZXRhOiBQaWNrPE1ldGEsICduYW1lJyB8ICd2YWx1ZScgfCAnZ2VuZXJhdG9yJz4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPE1ldGEsICdtZXRhZGF0YSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdpdGVtcy8nICsgaWQgKyAnL21ldGFkYXRhL25ldycpLCBtZXRhLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgdXBkYXRlIGl0ZW0gbWV0YWRhdGEgJy92MS9pdGVtcy97bmFtZX0vbWV0YWRhdGEve21ldGF9L3VwZGF0ZSdcbiAgcHVibGljIHVwZGF0ZUl0ZW1NZXRhKGlkOiBzdHJpbmcsIG1ldGE6IFBpY2s8TWV0YSwgJ25hbWUnIHwgJ3ZhbHVlJyB8ICdnZW5lcmF0b3InPik6IE9ic2VydmFibGU8UmVzcG9uc2U8TWV0YSwgJ21ldGFkYXRhJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2l0ZW1zLycgKyBpZCArICcvbWV0YWRhdGEvJyArIG1ldGEubmFtZSArICcvdXBkYXRlJyksIG1ldGEsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gR0VUIGRlbGV0ZSBpdGVtIG1ldGFkYXRhICcvdjEvaXRlbXMve25hbWV9L21ldGFkYXRhL3ttZXRhfS9kZWxldGUnXG4gIHB1YmxpYyBkZWxldGVJdGVtTWV0YShpZDogc3RyaW5nLCBtZXRhOiBQaWNrPE1ldGEsICduYW1lJyB8ICdnZW5lcmF0b3InPik6IE9ic2VydmFibGU8UmVzcG9uc2U8c3RyaW5nLCAnbmFtZSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2l0ZW1zLycgKyBpZCArICcvbWV0YWRhdGEvJyArIG1ldGEubmFtZSArICcvZGVsZXRlP2dlbmVyYXRvcj0nICsgbWV0YS5nZW5lcmF0b3IpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxufVxuXG4iXX0=