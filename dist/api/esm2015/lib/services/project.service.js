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
export class ProjectService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST validate '/v1/projects/validate'
    validate(name, title) {
        return this.http.post(this.serverService.query('projects/validate'), { name, title }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET projects '/v1/projects'
    getProjects() {
        return this.http.get(this.serverService.query('projects'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET project '/v1/projects/{name}'
    getProject(name) {
        return this.http.get(this.serverService.query('projects/' + name))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new project '/v1/projects/new'
    addProject(project) {
        return this.http.post(this.serverService.query('projects/new'), project, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update project '/v1/projects/{name}/update'
    updateProject(project) {
        return this.http.post(this.serverService.query('projects/' + project.name + '/update'), project, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete project '/v1/projects/{name}/delete'
    deleteProject(name) {
        return this.http.get(this.serverService.query('projects/' + name + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
ProjectService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProjectService_Factory() { return new ProjectService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ServerService)); }, token: ProjectService, providedIn: "root" });
ProjectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProjectService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FwaS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0QsT0FBTyxFQUFDLFVBQVUsRUFBTyxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sY0FBYztJQVF6QixZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5sRSxnQkFBVyxHQUFHO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0gsQ0FBQztJQUdGLENBQUM7SUFFRCx3Q0FBd0M7SUFDakMsUUFBUSxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3ZHLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzVELElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxvQ0FBb0M7SUFDN0IsVUFBVSxDQUFDLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDcEUsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVELHNDQUFzQztJQUMvQixVQUFVLENBQUMsT0FBZ0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUM1RixJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDO0lBRUQsbURBQW1EO0lBQzVDLGFBQWEsQ0FBQyxPQUFnQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3BILElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxrREFBa0Q7SUFDM0MsYUFBYSxDQUFDLElBQVk7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDO2FBQ2hGLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7Ozs7WUFsRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFUTyxVQUFVO1lBR1YsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgbmFycmEuZXVcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBOYXJyYSBBbmd1bGFyIEFQSS5cbiAqXG4gKiBOYXJyYSBBbmd1bGFyIEFQSSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogTmFycmEgQW5ndWxhciBBUEkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIE5hcnJhIEFuZ3VsYXIgQVBJLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogQXV0aG9yczogTWljaGFsIE1vY25hayA8bWljaGFsQG5hcnJhLmV1PlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHJldHJ5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1NlcnZlclNlcnZpY2V9IGZyb20gJy4vc2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtQcm9qZWN0LCBSZXNwb25zZX0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7RXJyb3JIZWxwZXJ9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBodHRwT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0pXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHNlcnZlclNlcnZpY2U6IFNlcnZlclNlcnZpY2UpIHtcbiAgfVxuXG4gIC8vIFBPU1QgdmFsaWRhdGUgJy92MS9wcm9qZWN0cy92YWxpZGF0ZSdcbiAgcHVibGljIHZhbGlkYXRlKG5hbWU6IHN0cmluZywgdGl0bGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U8Ym9vbGVhbiwgJ3ZhbGlkYXRpb24nPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgncHJvamVjdHMvdmFsaWRhdGUnKSwge25hbWUsIHRpdGxlfSwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgcHJvamVjdHMgJy92MS9wcm9qZWN0cydcbiAgcHVibGljIGdldFByb2plY3RzKCk6IE9ic2VydmFibGU8UmVzcG9uc2U8UHJvamVjdFtdLCAncHJvamVjdHMnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cycpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBwcm9qZWN0ICcvdjEvcHJvamVjdHMve25hbWV9J1xuICBwdWJsaWMgZ2V0UHJvamVjdChuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFByb2plY3QsICdwcm9qZWN0Jz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgncHJvamVjdHMvJyArIG5hbWUpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgbmV3IHByb2plY3QgJy92MS9wcm9qZWN0cy9uZXcnXG4gIHB1YmxpYyBhZGRQcm9qZWN0KHByb2plY3Q6IFByb2plY3QpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFByb2plY3QsICdwcm9qZWN0Jz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzL25ldycpLCBwcm9qZWN0LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgdXBkYXRlIHByb2plY3QgJy92MS9wcm9qZWN0cy97bmFtZX0vdXBkYXRlJ1xuICBwdWJsaWMgdXBkYXRlUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0KTogT2JzZXJ2YWJsZTxSZXNwb25zZTxQcm9qZWN0LCAncHJvamVjdCc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgcHJvamVjdC5uYW1lICsgJy91cGRhdGUnKSwgcHJvamVjdCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgZGVsZXRlIHByb2plY3QgJy92MS9wcm9qZWN0cy97bmFtZX0vZGVsZXRlJ1xuICBwdWJsaWMgZGVsZXRlUHJvamVjdChuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPHN0cmluZywgJ25hbWUnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgbmFtZSArICcvZGVsZXRlJykpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG59XG4iXX0=