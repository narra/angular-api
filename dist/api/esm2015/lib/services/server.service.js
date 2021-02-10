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
import * as i0 from "@angular/core";
export class ServerService {
    constructor() {
        // default values
        this.server = 'http://api.narra';
        this.version = 1;
        this.initialized = false;
    }
    //
    // initialize
    //
    initialize(server, version) {
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
    get apiServer() {
        return this.server;
    }
    get apiVersion() {
        return this.version;
    }
    get isInitialized() {
        return this.initialized;
    }
    //
    // public methods
    //
    query(path, filter, pagination, query, selectors) {
        // prepare params
        let params = `${path}?`;
        // filters
        if (filter.filters) {
            filter.filters.forEach((f) => {
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
ServerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ServerService_Factory() { return new ServerService(); }, token: ServerService, providedIn: "root" });
ServerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ServerService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYXBpL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNekMsTUFBTSxPQUFPLGFBQWE7SUFLeEI7UUFDRSxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsRUFBRTtJQUNGLGFBQWE7SUFDYixFQUFFO0lBQ0ssVUFBVSxDQUFDLE1BQWUsRUFBRSxPQUFnQjtRQUNqRCx5QkFBeUI7UUFDekIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0QjtRQUNELDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFO0lBQ0YsVUFBVTtJQUNWLEVBQUU7SUFDRixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFO0lBQ0YsaUJBQWlCO0lBQ2pCLEVBQUU7SUFDSyxLQUFLLENBQUMsSUFBWSxFQUFFLE1BQWUsRUFBRSxVQUF1QixFQUFFLEtBQWEsRUFBRSxTQUFzQjtRQUN4RyxpQkFBaUI7UUFDakIsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUN4QixVQUFVO1FBQ1YsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sSUFBSSxhQUFhLENBQUMsR0FBRyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxZQUFZO1FBQ1osSUFBSSxTQUFTLEVBQUU7WUFDYixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQzdCLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2pDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLE1BQU0sS0FBSyxHQUFHLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELFFBQVE7UUFDUixJQUFJLEtBQUssRUFBRTtZQUNULG1CQUFtQjtZQUNuQixNQUFNLElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDbEMsZUFBZTtZQUNmLElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsTUFBTSxJQUFJLGtCQUFrQixLQUFLLENBQUMsYUFBYSxHQUFHLENBQUM7YUFDcEQ7WUFDRCxhQUFhO1lBQ2IsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO2dCQUNyQixLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNsQyxNQUFNLElBQUksa0JBQWtCLEtBQUssR0FBRyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxhQUFhO1FBQ2IsSUFBSSxVQUFVLEVBQUU7WUFDZCw0QkFBNEI7WUFDNUIsTUFBTSxJQUFJLFFBQVEsVUFBVSxDQUFDLElBQUksYUFBYSxVQUFVLENBQUMsT0FBTyxXQUFXLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNoRztRQUNELHVCQUF1QjtRQUN2QixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUMxRCxDQUFDOzs7O1lBeEZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgbmFycmEuZXVcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBOYXJyYSBBbmd1bGFyIEFQSS5cbiAqXG4gKiBOYXJyYSBBbmd1bGFyIEFQSSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogTmFycmEgQW5ndWxhciBBUEkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIE5hcnJhIEFuZ3VsYXIgQVBJLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogQXV0aG9yczogTWljaGFsIE1vY25hayA8bWljaGFsQG5hcnJhLmV1PlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2luYXRpb24sIEZpbHRlciwgU2VsZWN0b3IsIFF1ZXJ5fSBmcm9tICcuLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzZXJ2ZXI6IHN0cmluZztcbiAgcHJpdmF0ZSB2ZXJzaW9uOiBudW1iZXI7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICB0aGlzLnNlcnZlciA9ICdodHRwOi8vYXBpLm5hcnJhJztcbiAgICB0aGlzLnZlcnNpb24gPSAxO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vXG4gIC8vIGluaXRpYWxpemVcbiAgLy9cbiAgcHVibGljIGluaXRpYWxpemUoc2VydmVyPzogc3RyaW5nLCB2ZXJzaW9uPzogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gc2V0IHNlcnZlciBpZiBwcm92aWRlZFxuICAgIGlmIChzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIH1cbiAgICAvLyBzZXQgdmVyc2lvbiBpZiBwcm92aWRlZFxuICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIH1cbiAgICAvLyBzZXQgaW5pdCBmbGFnXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICAvL1xuICAvLyBnZXR0ZXJzXG4gIC8vXG4gIHB1YmxpYyBnZXQgYXBpU2VydmVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmVyO1xuICB9XG5cbiAgcHVibGljIGdldCBhcGlWZXJzaW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNJbml0aWFsaXplZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplZDtcbiAgfVxuXG4gIC8vXG4gIC8vIHB1YmxpYyBtZXRob2RzXG4gIC8vXG4gIHB1YmxpYyBxdWVyeShwYXRoOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlciwgcGFnaW5hdGlvbj86IFBhZ2luYXRpb24sIHF1ZXJ5PzogUXVlcnksIHNlbGVjdG9ycz86IFNlbGVjdG9yW10pOiBzdHJpbmcge1xuICAgIC8vIHByZXBhcmUgcGFyYW1zXG4gICAgbGV0IHBhcmFtcyA9IGAke3BhdGh9P2A7XG4gICAgLy8gZmlsdGVyc1xuICAgIGlmIChmaWx0ZXIuZmlsdGVycykge1xuICAgICAgZmlsdGVyLmZpbHRlcnMuZm9yRWFjaCgoZjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHBhcmFtcyArPSBgZmlsdGVyc1tdPSR7Zn0mYDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBzZWxlY3RvcnNcbiAgICBpZiAoc2VsZWN0b3JzKSB7XG4gICAgICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgc2VsZWN0b3IuY29udGVudC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHBhcmFtcyArPSBgJHtzZWxlY3Rvci5uYW1lfVtdPSR7dmFsdWV9JmA7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHF1ZXJ5XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAvLyBhZGQgcXVlcnkgZmllbGRzXG4gICAgICBwYXJhbXMgKz0gYHF1ZXJ5PSR7cXVlcnkucXVlcnl9JmA7XG4gICAgICAvLyBhZGQgb3BlcmF0b3JcbiAgICAgIGlmIChxdWVyeS5xdWVyeU9wZXJhdG9yKSB7XG4gICAgICAgIHBhcmFtcyArPSBgcXVlcnlfb3BlcmF0b3I9JHtxdWVyeS5xdWVyeU9wZXJhdG9yfSZgO1xuICAgICAgfVxuICAgICAgLy8gYWRkIGZpZWxkc1xuICAgICAgaWYgKHF1ZXJ5LnF1ZXJ5RmllbGRzKSB7XG4gICAgICAgIHF1ZXJ5LnF1ZXJ5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgcGFyYW1zICs9IGBxdWVyeV9maWVsZHNbXT0ke2ZpZWxkfSZgO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcGFnaW5hdGlvblxuICAgIGlmIChwYWdpbmF0aW9uKSB7XG4gICAgICAvLyBhZGQgcGFnaW5hdGlvbiBwYXJhbWV0ZXJzXG4gICAgICBwYXJhbXMgKz0gYHBhZ2U9JHtwYWdpbmF0aW9uLnBhZ2V9JnBlcl9wYWdlPSR7cGFnaW5hdGlvbi5wZXJQYWdlfSZvZmZzZXQ9JHtwYWdpbmF0aW9uLm9mZnNldH1gO1xuICAgIH1cbiAgICAvLyBjaGVjayBmb3IgcGFnaW5hdGlvblxuICAgIHJldHVybiB0aGlzLnNlcnZlciArICcvdicgKyB0aGlzLnZlcnNpb24gKyAnLycgKyBwYXJhbXM7XG4gIH1cbn1cbiJdfQ==