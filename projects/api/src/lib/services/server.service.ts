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
import {Pagination, Query} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private server: string;
  private version: number;
  private initialized: boolean;

  constructor() {
    // default values
    this.server = 'http://api.narra';
    this.version = 1;
    this.initialized = false;
  }

  //
  // initialize
  //
  public initialize(server?: string, version?: number): void {
    // set server if provided
    if (server) {
      this.server = server;
    }
    // set version if provided
    if (version) {
      this.version = version;
    }
    // set init flag
    this.initialized = true;
  }

  //
  // getters
  //
  public get apiServer(): string {
    return this.server;
  }

  public get apiVersion(): number {
    return this.version;
  }

  public get isInitialized(): boolean {
    return this.initialized;
  }

  //
  // public methods
  //
  public query(path: string, query?: Query, pagination?: Pagination): string {
    // prepare params
    let params = path;
    // check for query
    if (query) {
      // prepare query param string
      params += '?';
      // prepare libraries selector
      if (query.libraries) {
        query.libraries.forEach((library: string) => {
          params += `libraries[]=${library}&`;
        });
      }
      // prepare generators selector
      if (query.generators) {
        query.generators.forEach((generator: string) => {
          params += `generators[]=${generator}&`;
        });
      }
      // prepare generators selector
      if (query.filters) {
        query.filters.forEach((filter: string) => {
          params += `filters[]=${filter}&`;
        });
      }
    }
    // check for pagination
    if (pagination) {
      // prepare query param string if not query
      if (!query) {
        params += '?';
      }
      // add pagination parameters
      params += `page=${pagination.page}&per_page=${pagination.perPage}&offset=${pagination.offset}`;
    }
    return this.server + '/v' + this.version + '/' + params;
  }
}
