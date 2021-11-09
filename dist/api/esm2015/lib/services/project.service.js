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
    // POST update project '/v1/projects/{id}/update'
    updateProject(project, filter) {
        return this.http.post(this.serverService.query('projects/' + project.id + '/update', filter), project, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete project '/v1/projects/{id}/delete'
    deleteProject(id) {
        return this.http.get(this.serverService.query('projects/' + id + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST export project '/v1/projects/{id}/export'
    exportProject(id) {
        return this.http.get(this.serverService.query('projects/' + id + '/export'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST export project '/v1/projects/{id}/export'
    importProject(id, file) {
        // prepare data
        const uploadData = new FormData();
        // set file
        uploadData.append('file', file);
        // upload
        return this.http.post(this.serverService.query('projects/' + id + '/import'), uploadData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new project metadata '/v1/projects/{id}/metadata/new'
    addProjectMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('projects/' + id + '/metadata/new', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update project metadata '/v1/projects/{id}/metadata/{meta}/update'
    updateProjectMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('projects/' + id + '/metadata/' + meta.name + '/update', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete project metadata '/v1/projects/{id}/metadata/{meta}/delete'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FwaS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0QsT0FBTyxFQUFDLFVBQVUsRUFBTyxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sY0FBYztJQVF6QixZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5sRSxnQkFBVyxHQUFHO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0gsQ0FBQztJQUdGLENBQUM7SUFFRCx3Q0FBd0M7SUFDakMsUUFBUSxDQUFDLEVBQVUsRUFBRSxJQUFZLEVBQUUsTUFBZTtRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDNUcsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVELDhCQUE4QjtJQUN2QixXQUFXLENBQUMsTUFBZTtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNwRSxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDO0lBRUQsb0NBQW9DO0lBQzdCLFVBQVUsQ0FBQyxFQUFVLEVBQUUsTUFBZTtRQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDMUUsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVELGdEQUFnRDtJQUNoRCxrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQ3ZCLGVBQWUsQ0FBQyxFQUFVLEVBQUUsU0FBb0IsRUFBRSxJQUFlLEVBQUUsS0FBYSxFQUFFLE1BQWUsRUFBRSxVQUF1QjtRQUMvSCxvQkFBb0I7UUFDcEIsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHFCQUFxQjtRQUNyQixJQUFJLFNBQVMsRUFBRTtZQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksSUFBSSxFQUFFO1lBQ1IsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEdBQUcsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ25ILElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCx3REFBd0Q7SUFDakQsbUJBQW1CLENBQUMsRUFBVSxFQUFFLE1BQWU7UUFDcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN6RixJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDO0lBRUQsZ0VBQWdFO0lBQ3pELGlCQUFpQixDQUFDLEVBQVUsRUFBRSxPQUFlLEVBQUUsTUFBZTtRQUNuRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEdBQUcsYUFBYSxHQUFHLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNwRyxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDO0lBRUQsc0NBQXNDO0lBQy9CLFVBQVUsQ0FBQyxPQUFnQixFQUFFLE1BQWU7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDcEcsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVELGlEQUFpRDtJQUMxQyxhQUFhLENBQUMsT0FBZ0IsRUFBRSxNQUFlO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzFILElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxnREFBZ0Q7SUFDekMsYUFBYSxDQUFDLEVBQVU7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDO2FBQzlFLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxpREFBaUQ7SUFDMUMsYUFBYSxDQUFDLEVBQVU7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDO2FBQzlFLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxpREFBaUQ7SUFDMUMsYUFBYSxDQUFDLEVBQVUsRUFBRSxJQUFVO1FBQ3pDLGVBQWU7UUFDZixNQUFNLFVBQVUsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLFdBQVc7UUFDWCxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQyxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRTtZQUM3RixjQUFjLEVBQUUsSUFBSTtZQUNwQixPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDLENBQUMsSUFBSSxDQUNMLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUVELDZEQUE2RDtJQUN0RCxjQUFjLENBQUMsRUFBVSxFQUFFLElBQWtDLEVBQUUsTUFBZTtRQUNuRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEdBQUcsZUFBZSxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JILElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCwwRUFBMEU7SUFDbkUsaUJBQWlCLENBQUMsRUFBVSxFQUFFLElBQWtDLEVBQUUsTUFBZTtRQUN0RixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzFJLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCx5RUFBeUU7SUFDbEUsaUJBQWlCLENBQUMsRUFBVSxFQUFFLElBQXdCO1FBQzNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQzthQUN6RyxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDOzs7O1lBN0pGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVE8sVUFBVTtZQUdWLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT4sIEVyaWMgUm9zZW56dmVpZyA8ZXJpY0BuYXJyYS5ldT5cbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE5hcnJhIFByb2plY3RcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjArIChzZWUgQ09QWUlORyBvciBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAudHh0KVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHJldHJ5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1NlcnZlclNlcnZpY2V9IGZyb20gJy4vc2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtJdGVtLCBMaWJyYXJ5LCBNZXRhLCBQYWdpbmF0aW9uLCBQcm9qZWN0LCBGaWx0ZXIsIFJlc3BvbnNlLCBRdWVyeSwgUmV0dXJufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtFcnJvckhlbHBlcn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJ2aWNlIHtcblxuICBwcml2YXRlIGh0dHBPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSlcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc2VydmVyU2VydmljZTogU2VydmVyU2VydmljZSkge1xuICB9XG5cbiAgLy8gUE9TVCB2YWxpZGF0ZSAnL3YxL3Byb2plY3RzL3ZhbGlkYXRlJ1xuICBwdWJsaWMgdmFsaWRhdGUoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPGJvb2xlYW4sICd2YWxpZGF0aW9uJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzL3ZhbGlkYXRlJywgZmlsdGVyKSwge2lkLCBuYW1lfSwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgcHJvamVjdHMgJy92MS9wcm9qZWN0cydcbiAgcHVibGljIGdldFByb2plY3RzKGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8UHJvamVjdFtdLCAncHJvamVjdHMnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cycsIGZpbHRlcikpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gR0VUIHByb2plY3QgJy92MS9wcm9qZWN0cy97bmFtZX0nXG4gIHB1YmxpYyBnZXRQcm9qZWN0KGlkOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8UHJvamVjdCwgJ3Byb2plY3QnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQsIGZpbHRlcikpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gR0VUIHByb2plY3QncyBpdGVtcyAnL3YxL3Byb2plY3RzL3tpZH0vaXRlbXMnXG4gIC8vIGRlZmF1bHQgbGlicmFyaWVzIHNlbGVjdG9yOiBhbGxcbiAgLy8gZGVmYXVsdCBtZXRhIHNlbGVjdG9yOiBub25lXG4gIHB1YmxpYyBnZXRQcm9qZWN0SXRlbXMoaWQ6IHN0cmluZywgbGlicmFyaWVzPzogc3RyaW5nW10sIG1ldGE/OiBzdHJpbmdbXSwgcXVlcnk/OiBRdWVyeSwgZmlsdGVyPzogRmlsdGVyLCBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbik6IE9ic2VydmFibGU8UmVzcG9uc2U8SXRlbVtdLCAnaXRlbXMnPj4ge1xuICAgIC8vIHByZXBhcmUgc2VsZWN0b3JzXG4gICAgY29uc3Qgc2VsZWN0b3JzID0gW107XG4gICAgLy8gbGlicmFyaWVzIHNlbGVjdG9yXG4gICAgaWYgKGxpYnJhcmllcykge1xuICAgICAgc2VsZWN0b3JzLnB1c2goe25hbWU6ICdsaWJyYXJpZXMnLCBjb250ZW50OiBsaWJyYXJpZXN9KTtcbiAgICB9XG4gICAgLy8gbWV0YSBzZWxlY3RvclxuICAgIGlmIChtZXRhKSB7XG4gICAgICBzZWxlY3RvcnMucHVzaCh7bmFtZTogJ21ldGEnLCBjb250ZW50OiBtZXRhfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQgKyAnL2l0ZW1zJywgZmlsdGVyLCBwYWdpbmF0aW9uLCBxdWVyeSwgc2VsZWN0b3JzKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgcHJvamVjdCdzIGxpYnJhcmllcyAnL3YxL3Byb2plY3RzL3tpZH0vbGlicmFyaWVzJ1xuICBwdWJsaWMgZ2V0UHJvamVjdExpYnJhcmllcyhpZDogc3RyaW5nLCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPExpYnJhcnlbXSwgJ2xpYnJhcmllcyc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBpZCArICcvbGlicmFyaWVzJywgZmlsdGVyKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgcHJvamVjdCdzIGxpYnJhcnkgJy92MS9wcm9qZWN0cy97aWR9L2xpYnJhcmllcy97bGlicmFyeX0nXG4gIHB1YmxpYyBnZXRQcm9qZWN0TGlicmFyeShpZDogc3RyaW5nLCBsaWJyYXJ5OiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8TGlicmFyeSwgJ2xpYnJhcnknPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQgKyAnL2xpYnJhcmllcy8nICsgbGlicmFyeSwgZmlsdGVyKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBQT1NUIG5ldyBwcm9qZWN0ICcvdjEvcHJvamVjdHMvbmV3J1xuICBwdWJsaWMgYWRkUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0LCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFByb2plY3QsICdwcm9qZWN0Jz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzL25ldycsIGZpbHRlciksIHByb2plY3QsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCB1cGRhdGUgcHJvamVjdCAnL3YxL3Byb2plY3RzL3tpZH0vdXBkYXRlJ1xuICBwdWJsaWMgdXBkYXRlUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0LCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFByb2plY3QsICdwcm9qZWN0Jz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBwcm9qZWN0LmlkICsgJy91cGRhdGUnLCBmaWx0ZXIpLCBwcm9qZWN0LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBkZWxldGUgcHJvamVjdCAnL3YxL3Byb2plY3RzL3tpZH0vZGVsZXRlJ1xuICBwdWJsaWMgZGVsZXRlUHJvamVjdChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxzdHJpbmcsICdpZCc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBpZCArICcvZGVsZXRlJykpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCBleHBvcnQgcHJvamVjdCAnL3YxL3Byb2plY3RzL3tpZH0vZXhwb3J0J1xuICBwdWJsaWMgZXhwb3J0UHJvamVjdChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxSZXR1cm4sICdyZXR1cm4nPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQgKyAnL2V4cG9ydCcpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgZXhwb3J0IHByb2plY3QgJy92MS9wcm9qZWN0cy97aWR9L2V4cG9ydCdcbiAgcHVibGljIGltcG9ydFByb2plY3QoaWQ6IHN0cmluZywgZmlsZTogRmlsZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy8gcHJlcGFyZSBkYXRhXG4gICAgY29uc3QgdXBsb2FkRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIC8vIHNldCBmaWxlXG4gICAgdXBsb2FkRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcbiAgICAvLyB1cGxvYWRcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBpZCArICcvaW1wb3J0JyksIHVwbG9hZERhdGEsIHtcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cydcbiAgICB9KS5waXBlKFxuICAgICAgcmV0cnkoMSksXG4gICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICk7XG4gIH1cblxuICAvLyBQT1NUIG5ldyBwcm9qZWN0IG1ldGFkYXRhICcvdjEvcHJvamVjdHMve2lkfS9tZXRhZGF0YS9uZXcnXG4gIHB1YmxpYyBhZGRQcm9qZWN0TWV0YShpZDogc3RyaW5nLCBtZXRhOiBQaWNrPE1ldGEsICduYW1lJyB8ICd2YWx1ZSc+LCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPE1ldGEsICdtZXRhZGF0YSc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQgKyAnL21ldGFkYXRhL25ldycsIGZpbHRlciksIG1ldGEsIHRoaXMuaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLy8gUE9TVCB1cGRhdGUgcHJvamVjdCBtZXRhZGF0YSAnL3YxL3Byb2plY3RzL3tpZH0vbWV0YWRhdGEve21ldGF9L3VwZGF0ZSdcbiAgcHVibGljIHVwZGF0ZVByb2plY3RNZXRhKGlkOiBzdHJpbmcsIG1ldGE6IFBpY2s8TWV0YSwgJ25hbWUnIHwgJ3ZhbHVlJz4sIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8TWV0YSwgJ21ldGFkYXRhJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ3Byb2plY3RzLycgKyBpZCArICcvbWV0YWRhdGEvJyArIG1ldGEubmFtZSArICcvdXBkYXRlJywgZmlsdGVyKSwgbWV0YSwgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgZGVsZXRlIHByb2plY3QgbWV0YWRhdGEgJy92MS9wcm9qZWN0cy97aWR9L21ldGFkYXRhL3ttZXRhfS9kZWxldGUnXG4gIHB1YmxpYyBkZWxldGVQcm9qZWN0TWV0YShpZDogc3RyaW5nLCBtZXRhOiBQaWNrPE1ldGEsICduYW1lJz4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPHN0cmluZywgJ25hbWUnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdwcm9qZWN0cy8nICsgaWQgKyAnL21ldGFkYXRhLycgKyBtZXRhLm5hbWUgKyAnL2RlbGV0ZScpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxufVxuIl19