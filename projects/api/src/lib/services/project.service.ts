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

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {ServerService} from './server.service';
import {Item, Library, Meta, Pagination, Project, Query, Response} from '../models';
import {ErrorHelper} from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private serverService: ServerService) {
  }

  // POST validate '/v1/projects/validate'
  public validate(id: string, name: string, query?: Query): Observable<Response<boolean, 'validation'>> {
    return this.http.post<any>(this.serverService.query('projects/validate', query), {id, name}, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET projects '/v1/projects'
  public getProjects(query?: Query): Observable<Response<Project[], 'projects'>> {
    return this.http.get<any>(this.serverService.query('projects', query))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET project '/v1/projects/{name}'
  public getProject(id: string, query?: Query): Observable<Response<Project, 'project'>> {
    return this.http.get<any>(this.serverService.query('projects/' + id, query))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET project's items '/v1/projects/{id}/items'
  public getProjectItems(id: string, query?: Query, pagination?: Pagination): Observable<Response<Item[], 'items'>> {
    return this.http.get<any>(this.serverService.query('projects/' + id + '/items', query, pagination))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET project's libraries '/v1/projects/{id}/libraries'
  public getProjectLibraries(id: string, query?: Query): Observable<Response<Library[], 'libraries'>> {
    return this.http.get<any>(this.serverService.query('projects/' + id + '/libraries', query))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET project's library '/v1/projects/{id}/libraries/{library}'
  public getProjectLibrary(id: string, library: string, query?: Query): Observable<Response<Library, 'library'>> {
    return this.http.get<any>(this.serverService.query('projects/' + id + '/libraries/' + library, query))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST new project '/v1/projects/new'
  public addProject(project: Project, query?: Query): Observable<Response<Project, 'project'>> {
    return this.http.post<any>(this.serverService.query('projects/new', query), project, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST update project '/v1/projects/{name}/update'
  public updateProject(project: Project, query?: Query): Observable<Response<Project, 'project'>> {
    return this.http.post<any>(this.serverService.query('projects/' + project.id + '/update', query), project, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET delete project '/v1/projects/{name}/delete'
  public deleteProject(id: string): Observable<Response<string, 'name'>> {
    return this.http.get<any>(this.serverService.query('projects/' + id + '/delete'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST new project metadata '/v1/projects/{name}/metadata/new'
  public addProjectMeta(id: string, meta: Pick<Meta, 'name' | 'value'>, query?: Query): Observable<Response<Meta, 'metadata'>> {
    return this.http.post<any>(this.serverService.query('projects/' + id + '/metadata/new', query), meta, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // POST update project metadata '/v1/projects/{name}/metadata/{meta}/update'
  public updateProjectMeta(id: string, meta: Pick<Meta, 'name' | 'value'>, query?: Query): Observable<Response<Meta, 'metadata'>> {
    return this.http.post<any>(this.serverService.query('projects/' + id + '/metadata/' + meta.name + '/update', query), meta, this.httpOptions)
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }

  // GET delete project metadata '/v1/projects/{name}/metadata/{meta}/delete'
  public deleteProjectMeta(id: string, meta: Pick<Meta, 'name'>): Observable<Response<string, 'name'>> {
    return this.http.get<any>(this.serverService.query('projects/' + id + '/metadata/' + meta.name + '/delete'))
      .pipe(
        retry(1),
        catchError(ErrorHelper.handleError)
      );
  }
}
