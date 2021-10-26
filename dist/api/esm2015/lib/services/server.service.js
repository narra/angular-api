/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
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
        if (filter) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYXBpL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNekMsTUFBTSxPQUFPLGFBQWE7SUFLeEI7UUFDRSxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsRUFBRTtJQUNGLGFBQWE7SUFDYixFQUFFO0lBQ0ssVUFBVSxDQUFDLE1BQWUsRUFBRSxPQUFnQjtRQUNqRCx5QkFBeUI7UUFDekIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0QjtRQUNELDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFO0lBQ0YsVUFBVTtJQUNWLEVBQUU7SUFDRixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFO0lBQ0YsaUJBQWlCO0lBQ2pCLEVBQUU7SUFDSyxLQUFLLENBQUMsSUFBWSxFQUFFLE1BQWUsRUFBRSxVQUF1QixFQUFFLEtBQWEsRUFBRSxTQUFzQjtRQUN4RyxpQkFBaUI7UUFDakIsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUN4QixVQUFVO1FBQ1YsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO2dCQUNuQyxNQUFNLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsWUFBWTtRQUNaLElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUM3QixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNqQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxNQUFNLEtBQUssR0FBRyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxRQUFRO1FBQ1IsSUFBSSxLQUFLLEVBQUU7WUFDVCxtQkFBbUI7WUFDbkIsTUFBTSxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ2xDLGVBQWU7WUFDZixJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSSxrQkFBa0IsS0FBSyxDQUFDLGFBQWEsR0FBRyxDQUFDO2FBQ3BEO1lBQ0QsYUFBYTtZQUNiLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTtnQkFDckIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDbEMsTUFBTSxJQUFJLGtCQUFrQixLQUFLLEdBQUcsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsYUFBYTtRQUNiLElBQUksVUFBVSxFQUFFO1lBQ2QsNEJBQTRCO1lBQzVCLE1BQU0sSUFBSSxRQUFRLFVBQVUsQ0FBQyxJQUFJLGFBQWEsVUFBVSxDQUFDLE9BQU8sV0FBVyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEc7UUFDRCx1QkFBdUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDMUQsQ0FBQzs7OztZQXhGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT4sIEVyaWMgUm9zZW56dmVpZyA8ZXJpY0BuYXJyYS5ldT5cbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE5hcnJhIFByb2plY3RcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjArIChzZWUgQ09QWUlORyBvciBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAudHh0KVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhZ2luYXRpb24sIEZpbHRlciwgU2VsZWN0b3IsIFF1ZXJ5fSBmcm9tICcuLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzZXJ2ZXI6IHN0cmluZztcbiAgcHJpdmF0ZSB2ZXJzaW9uOiBudW1iZXI7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gZGVmYXVsdCB2YWx1ZXNcbiAgICB0aGlzLnNlcnZlciA9ICdodHRwOi8vYXBpLm5hcnJhJztcbiAgICB0aGlzLnZlcnNpb24gPSAxO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vXG4gIC8vIGluaXRpYWxpemVcbiAgLy9cbiAgcHVibGljIGluaXRpYWxpemUoc2VydmVyPzogc3RyaW5nLCB2ZXJzaW9uPzogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gc2V0IHNlcnZlciBpZiBwcm92aWRlZFxuICAgIGlmIChzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIH1cbiAgICAvLyBzZXQgdmVyc2lvbiBpZiBwcm92aWRlZFxuICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIH1cbiAgICAvLyBzZXQgaW5pdCBmbGFnXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICAvL1xuICAvLyBnZXR0ZXJzXG4gIC8vXG4gIHB1YmxpYyBnZXQgYXBpU2VydmVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmVyO1xuICB9XG5cbiAgcHVibGljIGdldCBhcGlWZXJzaW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNJbml0aWFsaXplZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplZDtcbiAgfVxuXG4gIC8vXG4gIC8vIHB1YmxpYyBtZXRob2RzXG4gIC8vXG4gIHB1YmxpYyBxdWVyeShwYXRoOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlciwgcGFnaW5hdGlvbj86IFBhZ2luYXRpb24sIHF1ZXJ5PzogUXVlcnksIHNlbGVjdG9ycz86IFNlbGVjdG9yW10pOiBzdHJpbmcge1xuICAgIC8vIHByZXBhcmUgcGFyYW1zXG4gICAgbGV0IHBhcmFtcyA9IGAke3BhdGh9P2A7XG4gICAgLy8gZmlsdGVyc1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIGZpbHRlci5maWx0ZXJzLmZvckVhY2goKGY6IHN0cmluZykgPT4ge1xuICAgICAgICBwYXJhbXMgKz0gYGZpbHRlcnNbXT0ke2Z9JmA7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gc2VsZWN0b3JzXG4gICAgaWYgKHNlbGVjdG9ycykge1xuICAgICAgc2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgICAgIHNlbGVjdG9yLmNvbnRlbnQuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICBwYXJhbXMgKz0gYCR7c2VsZWN0b3IubmFtZX1bXT0ke3ZhbHVlfSZgO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBxdWVyeVxuICAgIGlmIChxdWVyeSkge1xuICAgICAgLy8gYWRkIHF1ZXJ5IGZpZWxkc1xuICAgICAgcGFyYW1zICs9IGBxdWVyeT0ke3F1ZXJ5LnF1ZXJ5fSZgO1xuICAgICAgLy8gYWRkIG9wZXJhdG9yXG4gICAgICBpZiAocXVlcnkucXVlcnlPcGVyYXRvcikge1xuICAgICAgICBwYXJhbXMgKz0gYHF1ZXJ5X29wZXJhdG9yPSR7cXVlcnkucXVlcnlPcGVyYXRvcn0mYDtcbiAgICAgIH1cbiAgICAgIC8vIGFkZCBmaWVsZHNcbiAgICAgIGlmIChxdWVyeS5xdWVyeUZpZWxkcykge1xuICAgICAgICBxdWVyeS5xdWVyeUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgIHBhcmFtcyArPSBgcXVlcnlfZmllbGRzW109JHtmaWVsZH0mYDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBhZ2luYXRpb25cbiAgICBpZiAocGFnaW5hdGlvbikge1xuICAgICAgLy8gYWRkIHBhZ2luYXRpb24gcGFyYW1ldGVyc1xuICAgICAgcGFyYW1zICs9IGBwYWdlPSR7cGFnaW5hdGlvbi5wYWdlfSZwZXJfcGFnZT0ke3BhZ2luYXRpb24ucGVyUGFnZX0mb2Zmc2V0PSR7cGFnaW5hdGlvbi5vZmZzZXR9YDtcbiAgICB9XG4gICAgLy8gY2hlY2sgZm9yIHBhZ2luYXRpb25cbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXIgKyAnL3YnICsgdGhpcy52ZXJzaW9uICsgJy8nICsgcGFyYW1zO1xuICB9XG59XG4iXX0=