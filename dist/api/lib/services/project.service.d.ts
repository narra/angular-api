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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';
import { Item, Library, Meta, Pagination, Project, Query, Response } from '../models';
export declare class ProjectService {
    private http;
    private serverService;
    private httpOptions;
    constructor(http: HttpClient, serverService: ServerService);
    validate(id: string, name: string, query?: Query): Observable<Response<boolean, 'validation'>>;
    getProjects(query?: Query): Observable<Response<Project[], 'projects'>>;
    getProject(id: string, query?: Query): Observable<Response<Project, 'project'>>;
    getProjectItems(id: string, query?: Query, pagination?: Pagination): Observable<Response<Item[], 'items'>>;
    getProjectLibraries(id: string, query?: Query): Observable<Response<Library[], 'libraries'>>;
    getProjectLibrary(id: string, library: string, query?: Query): Observable<Response<Library, 'library'>>;
    addProject(project: Project, query?: Query): Observable<Response<Project, 'project'>>;
    updateProject(project: Project, query?: Query): Observable<Response<Project, 'project'>>;
    deleteProject(id: string): Observable<Response<string, 'name'>>;
    addProjectMeta(id: string, meta: Pick<Meta, 'name' | 'value'>, query?: Query): Observable<Response<Meta, 'metadata'>>;
    updateProjectMeta(id: string, meta: Pick<Meta, 'name' | 'value'>, query?: Query): Observable<Response<Meta, 'metadata'>>;
    deleteProjectMeta(id: string, meta: Pick<Meta, 'name'>): Observable<Response<string, 'name'>>;
}
