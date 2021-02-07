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
                    params += 'filters[]=' + filter + '&';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYXBpL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZXJ2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFNekMsTUFBTSxPQUFPLGFBQWE7SUFLeEI7UUFDRSxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsRUFBRTtJQUNGLGFBQWE7SUFDYixFQUFFO0lBQ0ssVUFBVSxDQUFDLE1BQWUsRUFBRSxPQUFnQjtRQUNqRCx5QkFBeUI7UUFDekIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0QjtRQUNELDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFO0lBQ0YsVUFBVTtJQUNWLEVBQUU7SUFDRixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFO0lBQ0YsaUJBQWlCO0lBQ2pCLEVBQUU7SUFDSyxLQUFLLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDdEMsaUJBQWlCO1FBQ2pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixrQkFBa0I7UUFDbEIsSUFBSSxLQUFLLEVBQUU7WUFDVCw2QkFBNkI7WUFDN0IsTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUNkLDZCQUE2QjtZQUM3QixJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBZSxFQUFFLEVBQUU7b0JBQzFDLE1BQU0sSUFBSSxjQUFjLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELDhCQUE4QjtZQUM5QixJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFO29CQUM3QyxNQUFNLElBQUksZUFBZSxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCw4QkFBOEI7WUFDOUIsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO29CQUN2QyxNQUFNLElBQUksWUFBWSxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQzFELENBQUM7Ozs7WUE1RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAyMCBuYXJyYS5ldVxuICpcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIE5hcnJhIEFuZ3VsYXIgQVBJLlxuICpcbiAqIE5hcnJhIEFuZ3VsYXIgQVBJIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBOYXJyYSBBbmd1bGFyIEFQSSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggTmFycmEgQW5ndWxhciBBUEkuIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBBdXRob3JzOiBNaWNoYWwgTW9jbmFrIDxtaWNoYWxAbmFycmEuZXU+XG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UXVlcnl9IGZyb20gJy4uL21vZGVscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZlclNlcnZpY2Uge1xuICBwcml2YXRlIHNlcnZlcjogc3RyaW5nO1xuICBwcml2YXRlIHZlcnNpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBkZWZhdWx0IHZhbHVlc1xuICAgIHRoaXMuc2VydmVyID0gJ2h0dHA6Ly9hcGkubmFycmEnO1xuICAgIHRoaXMudmVyc2lvbiA9IDE7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICB9XG5cbiAgLy9cbiAgLy8gaW5pdGlhbGl6ZVxuICAvL1xuICBwdWJsaWMgaW5pdGlhbGl6ZShzZXJ2ZXI/OiBzdHJpbmcsIHZlcnNpb24/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyBzZXQgc2VydmVyIGlmIHByb3ZpZGVkXG4gICAgaWYgKHNlcnZlcikge1xuICAgICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgfVxuICAgIC8vIHNldCB2ZXJzaW9uIGlmIHByb3ZpZGVkXG4gICAgaWYgKHZlcnNpb24pIHtcbiAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgfVxuICAgIC8vIHNldCBpbml0IGZsYWdcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8vXG4gIC8vIGdldHRlcnNcbiAgLy9cbiAgcHVibGljIGdldCBhcGlTZXJ2ZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFwaVZlcnNpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0luaXRpYWxpemVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpemVkO1xuICB9XG5cbiAgLy9cbiAgLy8gcHVibGljIG1ldGhvZHNcbiAgLy9cbiAgcHVibGljIHF1ZXJ5KHBhdGg6IHN0cmluZywgcXVlcnk/OiBRdWVyeSk6IHN0cmluZyB7XG4gICAgLy8gcHJlcGFyZSBwYXJhbXNcbiAgICBsZXQgcGFyYW1zID0gcGF0aDtcbiAgICAvLyBjaGVjayBmb3IgcXVlcnlcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIC8vIHByZXBhcmUgcXVlcnkgcGFyYW0gc3RyaW5nXG4gICAgICBwYXJhbXMgKz0gJz8nO1xuICAgICAgLy8gcHJlcGFyZSBsaWJyYXJpZXMgc2VsZWN0b3JcbiAgICAgIGlmIChxdWVyeS5saWJyYXJpZXMpIHtcbiAgICAgICAgcXVlcnkubGlicmFyaWVzLmZvckVhY2goKGxpYnJhcnk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHBhcmFtcyArPSAnbGlicmFyaWVzW109JyArIGxpYnJhcnkgKyAnJic7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gcHJlcGFyZSBnZW5lcmF0b3JzIHNlbGVjdG9yXG4gICAgICBpZiAocXVlcnkuZ2VuZXJhdG9ycykge1xuICAgICAgICBxdWVyeS5nZW5lcmF0b3JzLmZvckVhY2goKGdlbmVyYXRvcjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgcGFyYW1zICs9ICdnZW5lcmF0b3JzW109JyArIGdlbmVyYXRvciArICcmJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBwcmVwYXJlIGdlbmVyYXRvcnMgc2VsZWN0b3JcbiAgICAgIGlmIChxdWVyeS5maWx0ZXJzKSB7XG4gICAgICAgIHF1ZXJ5LmZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBwYXJhbXMgKz0gJ2ZpbHRlcnNbXT0nICsgZmlsdGVyICsgJyYnO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VydmVyICsgJy92JyArIHRoaXMudmVyc2lvbiArICcvJyArIHBhcmFtcztcbiAgfVxufVxuIl19