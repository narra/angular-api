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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYXBpL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNekMsTUFBTSxPQUFPLGFBQWE7SUFLeEI7UUFDRSxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsRUFBRTtJQUNGLGFBQWE7SUFDYixFQUFFO0lBQ0ssVUFBVSxDQUFDLE1BQWUsRUFBRSxPQUFnQjtRQUNqRCx5QkFBeUI7UUFDekIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0QjtRQUNELDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFO0lBQ0YsVUFBVTtJQUNWLEVBQUU7SUFDRixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFO0lBQ0YsaUJBQWlCO0lBQ2pCLEVBQUU7SUFDSyxLQUFLLENBQUMsSUFBWSxFQUFFLE1BQWUsRUFBRSxVQUF1QixFQUFFLEtBQWEsRUFBRSxTQUFzQjtRQUN4RyxpQkFBaUI7UUFDakIsSUFBSSxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUN4QixVQUFVO1FBQ1YsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO2dCQUNuQyxNQUFNLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsWUFBWTtRQUNaLElBQUksU0FBUyxFQUFFO1lBQ2IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUM3QixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNqQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxNQUFNLEtBQUssR0FBRyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxRQUFRO1FBQ1IsSUFBSSxLQUFLLEVBQUU7WUFDVCxtQkFBbUI7WUFDbkIsTUFBTSxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ2xDLGVBQWU7WUFDZixJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSSxrQkFBa0IsS0FBSyxDQUFDLGFBQWEsR0FBRyxDQUFDO2FBQ3BEO1lBQ0QsYUFBYTtZQUNiLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTtnQkFDckIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDbEMsTUFBTSxJQUFJLGtCQUFrQixLQUFLLEdBQUcsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsYUFBYTtRQUNiLElBQUksVUFBVSxFQUFFO1lBQ2QsNEJBQTRCO1lBQzVCLE1BQU0sSUFBSSxRQUFRLFVBQVUsQ0FBQyxJQUFJLGFBQWEsVUFBVSxDQUFDLE9BQU8sV0FBVyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEc7UUFDRCx1QkFBdUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDMUQsQ0FBQzs7OztZQXhGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIG5hcnJhLmV1XG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgTmFycmEgQW5ndWxhciBBUEkuXG4gKlxuICogTmFycmEgQW5ndWxhciBBUEkgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIE5hcnJhIEFuZ3VsYXIgQVBJIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBOYXJyYSBBbmd1bGFyIEFQSS4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEF1dGhvcnM6IE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdpbmF0aW9uLCBGaWx0ZXIsIFNlbGVjdG9yLCBRdWVyeX0gZnJvbSAnLi4vbW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VydmVyU2VydmljZSB7XG4gIHByaXZhdGUgc2VydmVyOiBzdHJpbmc7XG4gIHByaXZhdGUgdmVyc2lvbjogbnVtYmVyO1xuICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGRlZmF1bHQgdmFsdWVzXG4gICAgdGhpcy5zZXJ2ZXIgPSAnaHR0cDovL2FwaS5uYXJyYSc7XG4gICAgdGhpcy52ZXJzaW9uID0gMTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gIH1cblxuICAvL1xuICAvLyBpbml0aWFsaXplXG4gIC8vXG4gIHB1YmxpYyBpbml0aWFsaXplKHNlcnZlcj86IHN0cmluZywgdmVyc2lvbj86IG51bWJlcik6IHZvaWQge1xuICAgIC8vIHNldCBzZXJ2ZXIgaWYgcHJvdmlkZWRcbiAgICBpZiAoc2VydmVyKSB7XG4gICAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB9XG4gICAgLy8gc2V0IHZlcnNpb24gaWYgcHJvdmlkZWRcbiAgICBpZiAodmVyc2lvbikge1xuICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICB9XG4gICAgLy8gc2V0IGluaXQgZmxhZ1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgLy9cbiAgLy8gZ2V0dGVyc1xuICAvL1xuICBwdWJsaWMgZ2V0IGFwaVNlcnZlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNlcnZlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXBpVmVyc2lvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGl6ZWQ7XG4gIH1cblxuICAvL1xuICAvLyBwdWJsaWMgbWV0aG9kc1xuICAvL1xuICBwdWJsaWMgcXVlcnkocGF0aDogc3RyaW5nLCBmaWx0ZXI/OiBGaWx0ZXIsIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uLCBxdWVyeT86IFF1ZXJ5LCBzZWxlY3RvcnM/OiBTZWxlY3RvcltdKTogc3RyaW5nIHtcbiAgICAvLyBwcmVwYXJlIHBhcmFtc1xuICAgIGxldCBwYXJhbXMgPSBgJHtwYXRofT9gO1xuICAgIC8vIGZpbHRlcnNcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBmaWx0ZXIuZmlsdGVycy5mb3JFYWNoKChmOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcGFyYW1zICs9IGBmaWx0ZXJzW109JHtmfSZgO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHNlbGVjdG9yc1xuICAgIGlmIChzZWxlY3RvcnMpIHtcbiAgICAgIHNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgICBzZWxlY3Rvci5jb250ZW50LmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcGFyYW1zICs9IGAke3NlbGVjdG9yLm5hbWV9W109JHt2YWx1ZX0mYDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gcXVlcnlcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIC8vIGFkZCBxdWVyeSBmaWVsZHNcbiAgICAgIHBhcmFtcyArPSBgcXVlcnk9JHtxdWVyeS5xdWVyeX0mYDtcbiAgICAgIC8vIGFkZCBvcGVyYXRvclxuICAgICAgaWYgKHF1ZXJ5LnF1ZXJ5T3BlcmF0b3IpIHtcbiAgICAgICAgcGFyYW1zICs9IGBxdWVyeV9vcGVyYXRvcj0ke3F1ZXJ5LnF1ZXJ5T3BlcmF0b3J9JmA7XG4gICAgICB9XG4gICAgICAvLyBhZGQgZmllbGRzXG4gICAgICBpZiAocXVlcnkucXVlcnlGaWVsZHMpIHtcbiAgICAgICAgcXVlcnkucXVlcnlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICBwYXJhbXMgKz0gYHF1ZXJ5X2ZpZWxkc1tdPSR7ZmllbGR9JmA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBwYWdpbmF0aW9uXG4gICAgaWYgKHBhZ2luYXRpb24pIHtcbiAgICAgIC8vIGFkZCBwYWdpbmF0aW9uIHBhcmFtZXRlcnNcbiAgICAgIHBhcmFtcyArPSBgcGFnZT0ke3BhZ2luYXRpb24ucGFnZX0mcGVyX3BhZ2U9JHtwYWdpbmF0aW9uLnBlclBhZ2V9Jm9mZnNldD0ke3BhZ2luYXRpb24ub2Zmc2V0fWA7XG4gICAgfVxuICAgIC8vIGNoZWNrIGZvciBwYWdpbmF0aW9uXG4gICAgcmV0dXJuIHRoaXMuc2VydmVyICsgJy92JyArIHRoaXMudmVyc2lvbiArICcvJyArIHBhcmFtcztcbiAgfVxufVxuIl19