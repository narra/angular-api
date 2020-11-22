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
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ServerService } from './server.service';
import { ErrorHelper } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./server.service";
export class UploadService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // POST upload '/v1/upload'
    upload(file) {
        // prepare data
        const uploadData = new FormData();
        // set file
        uploadData.append('file', file);
        // upload
        return this.http.post(this.serverService.query('upload'), uploadData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
UploadService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UploadService_Factory() { return new UploadService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ServerService)); }, token: UploadService, providedIn: "root" });
UploadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UploadService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYXBpL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFaEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUMxRSxDQUFDO0lBRUQsMkJBQTJCO0lBQ3BCLE1BQU0sQ0FBQyxJQUFVO1FBQ3RCLGVBQWU7UUFDZixNQUFNLFVBQVUsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLFdBQVc7UUFDWCxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQyxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUU7WUFDekUsY0FBYyxFQUFFLElBQUk7WUFDcEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDLElBQUksQ0FDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNKLENBQUM7Ozs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFSTyxVQUFVO1lBR1YsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjAgbmFycmEuZXVcbiAqXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBOYXJyYSBBbmd1bGFyIEFQSS5cbiAqXG4gKiBOYXJyYSBBbmd1bGFyIEFQSSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogTmFycmEgQW5ndWxhciBBUEkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIE5hcnJhIEFuZ3VsYXIgQVBJLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogQXV0aG9yczogTWljaGFsIE1vY25hayA8bWljaGFsQG5hcnJhLmV1PlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIHJldHJ5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1NlcnZlclNlcnZpY2V9IGZyb20gJy4vc2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtFcnJvckhlbHBlcn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzZXJ2ZXJTZXJ2aWNlOiBTZXJ2ZXJTZXJ2aWNlKSB7XG4gIH1cblxuICAvLyBQT1NUIHVwbG9hZCAnL3YxL3VwbG9hZCdcbiAgcHVibGljIHVwbG9hZChmaWxlOiBGaWxlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBwcmVwYXJlIGRhdGFcbiAgICBjb25zdCB1cGxvYWREYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgLy8gc2V0IGZpbGVcbiAgICB1cGxvYWREYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xuICAgIC8vIHVwbG9hZFxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgndXBsb2FkJyksIHVwbG9hZERhdGEsIHtcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cydcbiAgICB9KS5waXBlKFxuICAgICAgcmV0cnkoMSksXG4gICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==