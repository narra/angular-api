/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';
import { Item, Library, Meta, Pagination, Project, Filter, Response, Query, Return } from '../models';
export declare class ProjectService {
    private http;
    private serverService;
    private httpOptions;
    constructor(http: HttpClient, serverService: ServerService);
    validate(id: string, name: string, filter?: Filter): Observable<Response<boolean, 'validation'>>;
    getProjects(filter?: Filter): Observable<Response<Project[], 'projects'>>;
    getProject(id: string, filter?: Filter): Observable<Response<Project, 'project'>>;
    getProjectItems(id: string, libraries?: string[], meta?: string[], query?: Query, filter?: Filter, pagination?: Pagination): Observable<Response<Item[], 'items'>>;
    getProjectLibraries(id: string, filter?: Filter): Observable<Response<Library[], 'libraries'>>;
    getProjectLibrary(id: string, library: string, filter?: Filter): Observable<Response<Library, 'library'>>;
    addProject(project: Project, filter?: Filter): Observable<Response<Project, 'project'>>;
    updateProject(project: Project, filter?: Filter): Observable<Response<Project, 'project'>>;
    deleteProject(id: string): Observable<Response<string, 'id'>>;
    exportProject(id: string): Observable<Response<Return, 'return'>>;
    importProject(id: string, file: File): Observable<any>;
    addProjectMeta(id: string, meta: Pick<Meta, 'name' | 'value'>, filter?: Filter): Observable<Response<Meta, 'metadata'>>;
    updateProjectMeta(id: string, meta: Pick<Meta, 'name' | 'value'>, filter?: Filter): Observable<Response<Meta, 'metadata'>>;
    deleteProjectMeta(id: string, meta: Pick<Meta, 'name'>): Observable<Response<string, 'name'>>;
}
