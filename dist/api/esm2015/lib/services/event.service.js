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
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { ServerService } from './server.service';
import { ErrorHelper } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./server.service";
export class EventService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET events by default '/v1/events/me' possibly can be modified to admin's all '/v1/events'
    getEvents(filter = 'me') {
        return this.http.get(this.serverService.query('events/' + filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
EventService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ServerService)); }, token: EventService, providedIn: "root" });
EventService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EventService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hcGkvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhELE9BQU8sRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFLdkMsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBb0IsSUFBZ0IsRUFBVSxhQUE0QjtRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDMUUsQ0FBQztJQUVELDZGQUE2RjtJQUN0RixTQUFTLENBQUMsU0FBaUIsSUFBSTtRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQzthQUNwRSxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDOzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFUTyxVQUFVO1lBR1YsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgbmFycmEuZXVcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBOYXJyYSBBbmd1bGFyIEFQSS5cbiAqXG4gKiBOYXJyYSBBbmd1bGFyIEFQSSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogTmFycmEgQW5ndWxhciBBUEkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIE5hcnJhIEFuZ3VsYXIgQVBJLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogQXV0aG9yczogTWljaGFsIE1vY25hayA8bWljaGFsQG5hcnJhLmV1PlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3JldHJ5LCBjYXRjaEVycm9yfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1NlcnZlclNlcnZpY2V9IGZyb20gJy4vc2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtFdmVudCwgUmVzcG9uc2V9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge0Vycm9ySGVscGVyfSBmcm9tICcuLi9oZWxwZXJzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc2VydmVyU2VydmljZTogU2VydmVyU2VydmljZSkge1xuICB9XG5cbiAgLy8gR0VUIGV2ZW50cyBieSBkZWZhdWx0ICcvdjEvZXZlbnRzL21lJyBwb3NzaWJseSBjYW4gYmUgbW9kaWZpZWQgdG8gYWRtaW4ncyBhbGwgJy92MS9ldmVudHMnXG4gIHB1YmxpYyBnZXRFdmVudHMoZmlsdGVyOiBzdHJpbmcgPSAnbWUnKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxFdmVudFtdLCAnZXZlbnRzJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnZXZlbnRzLycgKyBmaWx0ZXIpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxufVxuIl19