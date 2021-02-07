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
    query(path, query) {
        // prepare params
        let params = path;
        // check for query
        if (query) {
            // prepare query param string
            params += '?';
            // prepare libraries selector
            if (query.libraries) {
                query.libraries.forEach((library) => {
                    params += 'libraries[]=' + library + '&';
                });
            }
            // prepare generators selector
            if (query.generators) {
                query.generators.forEach((generator) => {
                    params += 'generators[]=' + generator + '&';
                });
            }
            // prepare generators selector
            if (query.filters) {
                query.filters.forEach((filter) => {
                    params += 'filters[]=' + filter;
                });
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYXBpL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNekMsTUFBTSxPQUFPLGFBQWE7SUFLeEI7UUFDRSxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsRUFBRTtJQUNGLGFBQWE7SUFDYixFQUFFO0lBQ0ssVUFBVSxDQUFDLE1BQWUsRUFBRSxPQUFnQjtRQUNqRCx5QkFBeUI7UUFDekIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0QjtRQUNELDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFO0lBQ0YsVUFBVTtJQUNWLEVBQUU7SUFDRixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFO0lBQ0YsaUJBQWlCO0lBQ2pCLEVBQUU7SUFDSyxLQUFLLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDdEMsaUJBQWlCO1FBQ2pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixrQkFBa0I7UUFDbEIsSUFBSSxLQUFLLEVBQUU7WUFDVCw2QkFBNkI7WUFDN0IsTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUNkLDZCQUE2QjtZQUM3QixJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBZSxFQUFFLEVBQUU7b0JBQzFDLE1BQU0sSUFBSSxjQUFjLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELDhCQUE4QjtZQUM5QixJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFO29CQUM3QyxNQUFNLElBQUksZUFBZSxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCw4QkFBOEI7WUFDOUIsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO29CQUN2QyxNQUFNLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDMUQsQ0FBQzs7OztZQTVFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDIwIG5hcnJhLmV1XG4gKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgTmFycmEgQW5ndWxhciBBUEkuXG4gKlxuICogTmFycmEgQW5ndWxhciBBUEkgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIE5hcnJhIEFuZ3VsYXIgQVBJIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBOYXJyYSBBbmd1bGFyIEFQSS4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEF1dGhvcnM6IE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtRdWVyeX0gZnJvbSAnLi4vbW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VydmVyU2VydmljZSB7XG4gIHByaXZhdGUgc2VydmVyOiBzdHJpbmc7XG4gIHByaXZhdGUgdmVyc2lvbjogbnVtYmVyO1xuICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGRlZmF1bHQgdmFsdWVzXG4gICAgdGhpcy5zZXJ2ZXIgPSAnaHR0cDovL2FwaS5uYXJyYSc7XG4gICAgdGhpcy52ZXJzaW9uID0gMTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gIH1cblxuICAvL1xuICAvLyBpbml0aWFsaXplXG4gIC8vXG4gIHB1YmxpYyBpbml0aWFsaXplKHNlcnZlcj86IHN0cmluZywgdmVyc2lvbj86IG51bWJlcik6IHZvaWQge1xuICAgIC8vIHNldCBzZXJ2ZXIgaWYgcHJvdmlkZWRcbiAgICBpZiAoc2VydmVyKSB7XG4gICAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB9XG4gICAgLy8gc2V0IHZlcnNpb24gaWYgcHJvdmlkZWRcbiAgICBpZiAodmVyc2lvbikge1xuICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICB9XG4gICAgLy8gc2V0IGluaXQgZmxhZ1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgLy9cbiAgLy8gZ2V0dGVyc1xuICAvL1xuICBwdWJsaWMgZ2V0IGFwaVNlcnZlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNlcnZlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYXBpVmVyc2lvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZlcnNpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGl6ZWQ7XG4gIH1cblxuICAvL1xuICAvLyBwdWJsaWMgbWV0aG9kc1xuICAvL1xuICBwdWJsaWMgcXVlcnkocGF0aDogc3RyaW5nLCBxdWVyeT86IFF1ZXJ5KTogc3RyaW5nIHtcbiAgICAvLyBwcmVwYXJlIHBhcmFtc1xuICAgIGxldCBwYXJhbXMgPSBwYXRoO1xuICAgIC8vIGNoZWNrIGZvciBxdWVyeVxuICAgIGlmIChxdWVyeSkge1xuICAgICAgLy8gcHJlcGFyZSBxdWVyeSBwYXJhbSBzdHJpbmdcbiAgICAgIHBhcmFtcyArPSAnPyc7XG4gICAgICAvLyBwcmVwYXJlIGxpYnJhcmllcyBzZWxlY3RvclxuICAgICAgaWYgKHF1ZXJ5LmxpYnJhcmllcykge1xuICAgICAgICBxdWVyeS5saWJyYXJpZXMuZm9yRWFjaCgobGlicmFyeTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgcGFyYW1zICs9ICdsaWJyYXJpZXNbXT0nICsgbGlicmFyeSArICcmJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBwcmVwYXJlIGdlbmVyYXRvcnMgc2VsZWN0b3JcbiAgICAgIGlmIChxdWVyeS5nZW5lcmF0b3JzKSB7XG4gICAgICAgIHF1ZXJ5LmdlbmVyYXRvcnMuZm9yRWFjaCgoZ2VuZXJhdG9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBwYXJhbXMgKz0gJ2dlbmVyYXRvcnNbXT0nICsgZ2VuZXJhdG9yICsgJyYnO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHByZXBhcmUgZ2VuZXJhdG9ycyBzZWxlY3RvclxuICAgICAgaWYgKHF1ZXJ5LmZpbHRlcnMpIHtcbiAgICAgICAgcXVlcnkuZmlsdGVycy5mb3JFYWNoKChmaWx0ZXI6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHBhcmFtcyArPSAnZmlsdGVyc1tdPScgKyBmaWx0ZXI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXIgKyAnL3YnICsgdGhpcy52ZXJzaW9uICsgJy8nICsgcGFyYW1zO1xuICB9XG59XG4iXX0=