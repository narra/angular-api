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
    validate(id, name, filter) {
        return this.http.post(this.serverService.query('projects/validate', filter), { id, name }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET projects '/v1/projects'
    getProjects(filter) {
        return this.http.get(this.serverService.query('projects', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET project '/v1/projects/{name}'
    getProject(id, filter) {
        return this.http.get(this.serverService.query('projects/' + id, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET project's items '/v1/projects/{id}/items'
    // default libraries selector: all
    // default meta selector: none
    getProjectItems(id, libraries, meta, query, filter, pagination) {
        // prepare selectors
        const selectors = [];
        // libraries selector
        if (libraries) {
            selectors.push({ name: 'libraries', content: libraries });
        }
        // meta selector
        if (meta) {
            selectors.push({ name: 'meta', content: meta });
        }
        return this.http.get(this.serverService.query('projects/' + id + '/items', filter, pagination, query, selectors))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET project's libraries '/v1/projects/{id}/libraries'
    getProjectLibraries(id, filter) {
        return this.http.get(this.serverService.query('projects/' + id + '/libraries', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET project's library '/v1/projects/{id}/libraries/{library}'
    getProjectLibrary(id, library, filter) {
        return this.http.get(this.serverService.query('projects/' + id + '/libraries/' + library, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new project '/v1/projects/new'
    addProject(project, filter) {
        return this.http.post(this.serverService.query('projects/new', filter), project, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update project '/v1/projects/{name}/update'
    updateProject(project, filter) {
        return this.http.post(this.serverService.query('projects/' + project.id + '/update', filter), project, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete project '/v1/projects/{name}/delete'
    deleteProject(id) {
        return this.http.get(this.serverService.query('projects/' + id + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new project metadata '/v1/projects/{name}/metadata/new'
    addProjectMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('projects/' + id + '/metadata/new', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update project metadata '/v1/projects/{name}/metadata/{meta}/update'
    updateProjectMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('projects/' + id + '/metadata/' + meta.name + '/update', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete project metadata '/v1/projects/{name}/metadata/{meta}/delete'
    deleteProjectMeta(id, meta) {
        return this.http.get(this.serverService.query('projects/' + id + '/metadata/' + meta.name + '/delete'))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FwaS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0QsT0FBTyxFQUFDLFVBQVUsRUFBTyxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sY0FBYztJQVF6QixZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5sRSxnQkFBVyxHQUFHO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0gsQ0FBQztJQUdGLENBQUM7SUFFRCx3Q0FBd0M7SUFDakMsUUFBUSxDQUFDLEVBQVUsRUFBRSxJQUFZLEVBQUUsTUFBZTtRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDNUcsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxD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SUFDTixDQUFDO0lBRUQsNEVBQTRFO0lBQ3JFLGlCQUFpQixDQUFDLEVBQVUsRUFBRSxJQUFrQyxFQUFFLE1BQWU7UUFDdEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMxSSxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDO0lBRUQsMkVBQTJFO0lBQ3BFLGlCQUFpQixDQUFDLEVBQVUsRUFBRSxJQUF3QjtRQUMzRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDekcsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQzs7OztZQXBJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVRPLFVBQVU7WUFHVixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAyMCBuYXJyYS5ldVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIE5hcnJhIEFuZ3VsYXIgQVBJLlxuICpcbiAqIE5hcnJhIEFuZ3VsYXIgQVBJIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBOYXJyYSBBbmd1bGFyIEFQSSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggTmFycmEgQW5ndWxhciBBUEkuIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBBdXRob3JzOiBNaWNoYWwgTW9jbmFrIDxtaWNoYWxAbmFycmEuZXU+XG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgcmV0cnl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U2VydmVyU2VydmljZX0gZnJvbSAnLi9zZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge0l0ZW0sIExpYnJhcnksIE1ldGEsIFBhZ2luYXRpb24sIFByb2plY3QsIEZpbHRlciwgUmVzcG9uc2UsIFF1ZXJ5fSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtFcnJvckhlbHBlcn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJ2aWNlIHtcblxuICBwcml2YXRlIGh0dHBPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSlcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc2VydmVyU2VydmljZTogU2VydmVyU2VydmljZSkge1xuICB9XG5cbiAgLy8gUE9TVCB2YWxpZGF0ZSAnL3YxL3Byb2plY3RzL3ZhbGlkYXRlJ1xuICBwdWJsaWMgdmFsaWRhdGUoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPGJvb2xlYW4sICd2YWxpZGF0aW9uJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzL3ZhbGlkYXRlJywgZmlsdGVyKSwge2lkLCBuYW1lfSwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgcHJvamVjdHMgJy92MS9wcm9qZWN0cydcbiAgcHVibGljIGdldFByb2plY3RzKGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8UHJvamVjdFtdLCAncHJvamVjdHMnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cycsIGZpbHRlcikpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gR0VUIHByb2plY3QgJy92MS9wcm9qZWN0cy97bmFtZX0nXG4gIHB1YmxpYyBnZXRQcm9qZWN0KGlkOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8UHJvamVjdCwgJ3Byb2plY3QnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQsIGZpbHRlcikpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gR0VUIHByb2plY3QncyBpdGVtcyAnL3YxL3Byb2plY3RzL3tpZH0vaXRlbXMnXG4gIC8vIGRlZmF1bHQgbGlicmFyaWVzIHNlbGVjdG9yOiBhbGxcbiAgLy8gZGVmYXVsdCBtZXRhIHNlbGVjdG9yOiBub25lXG4gIHB1YmxpYyBnZXRQcm9qZWN0SXRlbXMoaWQ6IHN0cmluZywgbGlicmFyaWVzPzogc3RyaW5nW10sIG1ldGE/OiBzdHJpbmdbXSwgcXVlcnk/OiBRdWVyeSwgZmlsdGVyPzogRmlsdGVyLCBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbik6IE9ic2VydmFibGU8UmVzcG9uc2U8SXRlbVtdLCAnaXRlbXMnPj4ge1xuICAgIC8vIHByZXBhcmUgc2VsZWN0b3JzXG4gICAgY29uc3Qgc2VsZWN0b3JzID0gW107XG4gICAgLy8gbGlicmFyaWVzIHNlbGVjdG9yXG4gICAgaWYgKGxpYnJhcmllcykge1xuICAgICAgc2VsZWN0b3JzLnB1c2goe25hbWU6ICdsaWJyYXJpZXMnLCBjb250ZW50OiBsaWJyYXJpZXN9KTtcbiAgICB9XG4gICAgLy8gbWV0YSBzZWxlY3RvclxuICAgIGlmIChtZXRhKSB7XG4gICAgICBzZWxlY3RvcnMucHVzaCh7bmFtZTogJ21ldGEnLCBjb250ZW50OiBtZXRhfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQgKyAnL2l0ZW1zJywgZmlsdGVyLCBwYWdpbmF0aW9uLCBxdWVyeSwgc2VsZWN0b3JzKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgcHJvamVjdCdzIGxpYnJhcmllcyAnL3YxL3Byb2plY3RzL3tpZH0vbGlicmFyaWVzJ1xuICBwdWJsaWMgZ2V0UHJvamVjdExpYnJhcmllcyhpZDogc3RyaW5nLCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPExpYnJhcnlbXSwgJ2xpYnJhcmllcyc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBpZCArICcvbGlicmFyaWVzJywgZmlsdGVyKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgcHJvamVjdCdzIGxpYnJhcnkgJy92MS9wcm9qZWN0cy97aWR9L2xpYnJhcmllcy97bGlicmFyeX0nXG4gIHB1YmxpYyBnZXRQcm9qZWN0TGlicmFyeShpZDogc3RyaW5nLCBsaWJyYXJ5OiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8TGlicmFyeSwgJ2xpYnJhcnknPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQgKyAnL2xpYnJhcmllcy8nICsgbGlicmFyeSwgZmlsdGVyKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBQT1NUIG5ldyBwcm9qZWN0ICcvdjEvcHJvamVjdHMvbmV3J1xuICBwdWJsaWMgYWRkUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0LCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFByb2plY3QsICdwcm9qZWN0Jz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzL25ldycsIGZpbHRlciksIHByb2plY3QsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCB1cGRhdGUgcHJvamVjdCAnL3YxL3Byb2plY3RzL3tuYW1lfS91cGRhdGUnXG4gIHB1YmxpYyB1cGRhdGVQcm9qZWN0KHByb2plY3Q6IFByb2plY3QsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8UHJvamVjdCwgJ3Byb2plY3QnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgncHJvamVjdHMvJyArIHByb2plY3QuaWQgKyAnL3VwZGF0ZScsIGZpbHRlciksIHByb2plY3QsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gR0VUIGRlbGV0ZSBwcm9qZWN0ICcvdjEvcHJvamVjdHMve25hbWV9L2RlbGV0ZSdcbiAgcHVibGljIGRlbGV0ZVByb2plY3QoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UmVzcG9uc2U8c3RyaW5nLCAnbmFtZSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBpZCArICcvZGVsZXRlJykpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCBuZXcgcHJvamVjdCBtZXRhZGF0YSAnL3YxL3Byb2plY3RzL3tuYW1lfS9tZXRhZGF0YS9uZXcnXG4gIHB1YmxpYyBhZGRQcm9qZWN0TWV0YShpZDogc3RyaW5nLCBtZXRhOiBQaWNrPE1ldGEsICduYW1lJyB8ICd2YWx1ZSc+LCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPE1ldGEsICdtZXRhZGF0YSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQgKyAnL21ldGFkYXRhL25ldycsIGZpbHRlciksIG1ldGEsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCB1cGRhdGUgcHJvamVjdCBtZXRhZGF0YSAnL3YxL3Byb2plY3RzL3tuYW1lfS9tZXRhZGF0YS97bWV0YX0vdXBkYXRlJ1xuICBwdWJsaWMgdXBkYXRlUHJvamVjdE1ldGEoaWQ6IHN0cmluZywgbWV0YTogUGljazxNZXRhLCAnbmFtZScgfCAndmFsdWUnPiwgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxNZXRhLCAnbWV0YWRhdGEnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgncHJvamVjdHMvJyArIGlkICsgJy9tZXRhZGF0YS8nICsgbWV0YS5uYW1lICsgJy91cGRhdGUnLCBmaWx0ZXIpLCBtZXRhLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBkZWxldGUgcHJvamVjdCBtZXRhZGF0YSAnL3YxL3Byb2plY3RzL3tuYW1lfS9tZXRhZGF0YS97bWV0YX0vZGVsZXRlJ1xuICBwdWJsaWMgZGVsZXRlUHJvamVjdE1ldGEoaWQ6IHN0cmluZywgbWV0YTogUGljazxNZXRhLCAnbmFtZSc+KTogT2JzZXJ2YWJsZTxSZXNwb25zZTxzdHJpbmcsICduYW1lJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgncHJvamVjdHMvJyArIGlkICsgJy9tZXRhZGF0YS8nICsgbWV0YS5uYW1lICsgJy9kZWxldGUnKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==