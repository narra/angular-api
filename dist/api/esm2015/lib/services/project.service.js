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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FwaS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0QsT0FBTyxFQUFDLFVBQVUsRUFBTyxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sY0FBYztJQVF6QixZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5sRSxnQkFBVyxHQUFHO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0gsQ0FBQztJQUdGLENBQUM7SUFFRCx3Q0FBd0M7SUFDakMsUUFBUSxDQUFDLEVBQVUsRUFBRSxJQUFZLEVBQUUsTUFBZTtRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDNUcsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVE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QTRFO0lBQ3JFLGlCQUFpQixDQUFDLEVBQVUsRUFBRSxJQUFrQyxFQUFFLE1BQWU7UUFDdEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMxSSxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDO0lBRUQsMkVBQTJFO0lBQ3BFLGlCQUFpQixDQUFDLEVBQVUsRUFBRSxJQUF3QjtRQUMzRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDekcsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQzs7OztZQXBJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVRPLFVBQVU7WUFHVixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQ6IChjKSAyMDIxLCBNaWNoYWwgTW9jbmFrIDxtaWNoYWxAbmFycmEuZXU+LCBFcmljIFJvc2VuenZlaWcgPGVyaWNAbmFycmEuZXU+XG4gKiBDb3B5cmlnaHQ6IChjKSAyMDIxLCBOYXJyYSBQcm9qZWN0XG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2My4wKyAoc2VlIENPUFlJTkcgb3IgaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMy4wLnR4dClcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCByZXRyeX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTZXJ2ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZlci5zZXJ2aWNlJztcbmltcG9ydCB7SXRlbSwgTGlicmFyeSwgTWV0YSwgUGFnaW5hdGlvbiwgUHJvamVjdCwgRmlsdGVyLCBSZXNwb25zZSwgUXVlcnl9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge0Vycm9ySGVscGVyfSBmcm9tICcuLi9oZWxwZXJzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJvamVjdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgaHR0cE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9KVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzZXJ2ZXJTZXJ2aWNlOiBTZXJ2ZXJTZXJ2aWNlKSB7XG4gIH1cblxuICAvLyBQT1NUIHZhbGlkYXRlICcvdjEvcHJvamVjdHMvdmFsaWRhdGUnXG4gIHB1YmxpYyB2YWxpZGF0ZShpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8Ym9vbGVhbiwgJ3ZhbGlkYXRpb24nPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgncHJvamVjdHMvdmFsaWRhdGUnLCBmaWx0ZXIpLCB7aWQsIG5hbWV9LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBwcm9qZWN0cyAnL3YxL3Byb2plY3RzJ1xuICBwdWJsaWMgZ2V0UHJvamVjdHMoZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxQcm9qZWN0W10sICdwcm9qZWN0cyc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzJywgZmlsdGVyKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgcHJvamVjdCAnL3YxL3Byb2plY3RzL3tuYW1lfSdcbiAgcHVibGljIGdldFByb2plY3QoaWQ6IHN0cmluZywgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxQcm9qZWN0LCAncHJvamVjdCc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBpZCwgZmlsdGVyKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgcHJvamVjdCdzIGl0ZW1zICcvdjEvcHJvamVjdHMve2lkfS9pdGVtcydcbiAgLy8gZGVmYXVsdCBsaWJyYXJpZXMgc2VsZWN0b3I6IGFsbFxuICAvLyBkZWZhdWx0IG1ldGEgc2VsZWN0b3I6IG5vbmVcbiAgcHVibGljIGdldFByb2plY3RJdGVtcyhpZDogc3RyaW5nLCBsaWJyYXJpZXM/OiBzdHJpbmdbXSwgbWV0YT86IHN0cmluZ1tdLCBxdWVyeT86IFF1ZXJ5LCBmaWx0ZXI/OiBGaWx0ZXIsIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxJdGVtW10sICdpdGVtcyc+PiB7XG4gICAgLy8gcHJlcGFyZSBzZWxlY3RvcnNcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBbXTtcbiAgICAvLyBsaWJyYXJpZXMgc2VsZWN0b3JcbiAgICBpZiAobGlicmFyaWVzKSB7XG4gICAgICBzZWxlY3RvcnMucHVzaCh7bmFtZTogJ2xpYnJhcmllcycsIGNvbnRlbnQ6IGxpYnJhcmllc30pO1xuICAgIH1cbiAgICAvLyBtZXRhIHNlbGVjdG9yXG4gICAgaWYgKG1ldGEpIHtcbiAgICAgIHNlbGVjdG9ycy5wdXNoKHtuYW1lOiAnbWV0YScsIGNvbnRlbnQ6IG1ldGF9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBpZCArICcvaXRlbXMnLCBmaWx0ZXIsIHBhZ2luYXRpb24sIHF1ZXJ5LCBzZWxlY3RvcnMpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBwcm9qZWN0J3MgbGlicmFyaWVzICcvdjEvcHJvamVjdHMve2lkfS9saWJyYXJpZXMnXG4gIHB1YmxpYyBnZXRQcm9qZWN0TGlicmFyaWVzKGlkOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8TGlicmFyeVtdLCAnbGlicmFyaWVzJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgncHJvamVjdHMvJyArIGlkICsgJy9saWJyYXJpZXMnLCBmaWx0ZXIpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBwcm9qZWN0J3MgbGlicmFyeSAnL3YxL3Byb2plY3RzL3tpZH0vbGlicmFyaWVzL3tsaWJyYXJ5fSdcbiAgcHVibGljIGdldFByb2plY3RMaWJyYXJ5KGlkOiBzdHJpbmcsIGxpYnJhcnk6IHN0cmluZywgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxMaWJyYXJ5LCAnbGlicmFyeSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBpZCArICcvbGlicmFyaWVzLycgKyBsaWJyYXJ5LCBmaWx0ZXIpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgbmV3IHByb2plY3QgJy92MS9wcm9qZWN0cy9uZXcnXG4gIHB1YmxpYyBhZGRQcm9qZWN0KHByb2plY3Q6IFByb2plY3QsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8UHJvamVjdCwgJ3Byb2plY3QnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgncHJvamVjdHMvbmV3JywgZmlsdGVyKSwgcHJvamVjdCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBQT1NUIHVwZGF0ZSBwcm9qZWN0ICcvdjEvcHJvamVjdHMve25hbWV9L3VwZGF0ZSdcbiAgcHVibGljIHVwZGF0ZVByb2plY3QocHJvamVjdDogUHJvamVjdCwgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxQcm9qZWN0LCAncHJvamVjdCc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgcHJvamVjdC5pZCArICcvdXBkYXRlJywgZmlsdGVyKSwgcHJvamVjdCwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgZGVsZXRlIHByb2plY3QgJy92MS9wcm9qZWN0cy97bmFtZX0vZGVsZXRlJ1xuICBwdWJsaWMgZGVsZXRlUHJvamVjdChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxzdHJpbmcsICdpZCc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBpZCArICcvZGVsZXRlJykpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCBuZXcgcHJvamVjdCBtZXRhZGF0YSAnL3YxL3Byb2plY3RzL3tuYW1lfS9tZXRhZGF0YS9uZXcnXG4gIHB1YmxpYyBhZGRQcm9qZWN0TWV0YShpZDogc3RyaW5nLCBtZXRhOiBQaWNrPE1ldGEsICduYW1lJyB8ICd2YWx1ZSc+LCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPE1ldGEsICdtZXRhZGF0YSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQgKyAnL21ldGFkYXRhL25ldycsIGZpbHRlciksIG1ldGEsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCB1cGRhdGUgcHJvamVjdCBtZXRhZGF0YSAnL3YxL3Byb2plY3RzL3tuYW1lfS9tZXRhZGF0YS97bWV0YX0vdXBkYXRlJ1xuICBwdWJsaWMgdXBkYXRlUHJvamVjdE1ldGEoaWQ6IHN0cmluZywgbWV0YTogUGljazxNZXRhLCAnbmFtZScgfCAndmFsdWUnPiwgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxNZXRhLCAnbWV0YWRhdGEnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgncHJvamVjdHMvJyArIGlkICsgJy9tZXRhZGF0YS8nICsgbWV0YS5uYW1lICsgJy91cGRhdGUnLCBmaWx0ZXIpLCBtZXRhLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBkZWxldGUgcHJvamVjdCBtZXRhZGF0YSAnL3YxL3Byb2plY3RzL3tuYW1lfS9tZXRhZGF0YS97bWV0YX0vZGVsZXRlJ1xuICBwdWJsaWMgZGVsZXRlUHJvamVjdE1ldGEoaWQ6IHN0cmluZywgbWV0YTogUGljazxNZXRhLCAnbmFtZSc+KTogT2JzZXJ2YWJsZTxSZXNwb25zZTxzdHJpbmcsICduYW1lJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgncHJvamVjdHMvJyArIGlkICsgJy9tZXRhZGF0YS8nICsgbWV0YS5uYW1lICsgJy9kZWxldGUnKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==