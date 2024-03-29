/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Injectable} from '@angular/core';
import {Pagination, Filter, Selector, Query} from '../models';

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
  public query(path: string, filter?: Filter, pagination?: Pagination, query?: Query, selectors?: Selector[]): string {
    // prepare params
    let params = `${path}?`;
    // filters
    if (filter) {
      filter.filters.forEach((f: string) => {
        params += `filters[]=${f}&`;
      });
    }
    // selectors
    if (selectors) {
      selectors.forEach((selector) => {
        selector.content.forEach((value) => {
          params += `${selector.name}[]=${value}&`;
        });
      });
    }
    // query
    if (query) {
      // add query fields
      params += `query=${query.query}&`;
      // add operator
      if (query.queryOperator) {
        params += `query_operator=${query.queryOperator}&`;
      }
      // add fields
      if (query.queryFields) {
        query.queryFields.forEach((field) => {
          params += `query_fields[]=${field}&`;
        });
      }
    }
    // pagination
    if (pagination) {
      // add pagination parameters
      params += `page=${pagination.page}&per_page=${pagination.perPage}&offset=${pagination.offset}`;
    }
    // check for pagination
    return this.server + '/v' + this.version + '/' + params;
  }
}
