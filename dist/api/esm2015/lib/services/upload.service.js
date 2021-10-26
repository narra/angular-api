/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYXBpL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91cGxvYWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFaEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUMxRSxDQUFDO0lBRUQsMkJBQTJCO0lBQ3BCLE1BQU0sQ0FBQyxJQUFVO1FBQ3RCLGVBQWU7UUFDZixNQUFNLFVBQVUsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLFdBQVc7UUFDWCxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQyxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUU7WUFDekUsY0FBYyxFQUFFLElBQUk7WUFDcEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDLElBQUksQ0FDTCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNKLENBQUM7Ozs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFSTyxVQUFVO1lBR1YsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0OiAoYykgMjAyMSwgTWljaGFsIE1vY25hayA8bWljaGFsQG5hcnJhLmV1PiwgRXJpYyBSb3Nlbnp2ZWlnIDxlcmljQG5hcnJhLmV1PlxuICogQ29weXJpZ2h0OiAoYykgMjAyMSwgTmFycmEgUHJvamVjdFxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdjMuMCsgKHNlZSBDT1BZSU5HIG9yIGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTMuMC50eHQpXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgcmV0cnl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U2VydmVyU2VydmljZX0gZnJvbSAnLi9zZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge0Vycm9ySGVscGVyfSBmcm9tICcuLi9oZWxwZXJzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHNlcnZlclNlcnZpY2U6IFNlcnZlclNlcnZpY2UpIHtcbiAgfVxuXG4gIC8vIFBPU1QgdXBsb2FkICcvdjEvdXBsb2FkJ1xuICBwdWJsaWMgdXBsb2FkKGZpbGU6IEZpbGUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIC8vIHByZXBhcmUgZGF0YVxuICAgIGNvbnN0IHVwbG9hZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAvLyBzZXQgZmlsZVxuICAgIHVwbG9hZERhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XG4gICAgLy8gdXBsb2FkXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCd1cGxvYWQnKSwgdXBsb2FkRGF0YSwge1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJ1xuICAgIH0pLnBpcGUoXG4gICAgICByZXRyeSgxKSxcbiAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgKTtcbiAgfVxufVxuIl19