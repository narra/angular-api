/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { ServerService } from './server.service';
import { ErrorHelper } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./server.service";
export class ProviderService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET authentication providers '/auth/providers'
    getProviders() {
        return this.http.get(this.serverService.apiServer + '/auth/providers')
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
ProviderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProviderService_Factory() { return new ProviderService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ServerService)); }, token: ProviderService, providedIn: "root" });
ProviderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProviderService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hcGkvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Byb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhELE9BQU8sRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFLdkMsTUFBTSxPQUFPLGVBQWU7SUFFMUIsWUFBb0IsSUFBZ0IsRUFBVSxhQUE0QjtRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDMUUsQ0FBQztJQUVELGlEQUFpRDtJQUMxQyxZQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7YUFDeEUsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQzs7OztZQWZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVE8sVUFBVTtZQUdWLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT4sIEVyaWMgUm9zZW56dmVpZyA8ZXJpY0BuYXJyYS5ldT5cbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE5hcnJhIFByb2plY3RcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjArIChzZWUgQ09QWUlORyBvciBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAudHh0KVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3JldHJ5LCBjYXRjaEVycm9yfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1NlcnZlclNlcnZpY2V9IGZyb20gJy4vc2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtQcm92aWRlciwgUmVzcG9uc2V9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge0Vycm9ySGVscGVyfSBmcm9tICcuLi9oZWxwZXJzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc2VydmVyU2VydmljZTogU2VydmVyU2VydmljZSkge1xuICB9XG5cbiAgLy8gR0VUIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVycyAnL2F1dGgvcHJvdmlkZXJzJ1xuICBwdWJsaWMgZ2V0UHJvdmlkZXJzKCk6IE9ic2VydmFibGU8UmVzcG9uc2U8UHJvdmlkZXJbXSwgJ3Byb3ZpZGVycyc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UuYXBpU2VydmVyICsgJy9hdXRoL3Byb3ZpZGVycycpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG59XG4iXX0=