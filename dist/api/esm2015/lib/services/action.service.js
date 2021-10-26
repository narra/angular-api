/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ServerService } from './server.service';
import { ErrorHelper } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./server.service";
export class ActionService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // GET actions '/v1/actions'
    getActions(filter) {
        return this.http.get(this.serverService.query('actions', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST perform action '/v1/action/:identifier/perform'
    performAction(items, action, filter) {
        return this.http.post(this.serverService.query(`actions/${action.identifier}/perform`, filter), { items }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
ActionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ActionService_Factory() { return new ActionService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ServerService)); }, token: ActionService, providedIn: "root" });
ActionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ActionService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYXBpL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBUSxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRTdELE9BQU8sRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFLdkMsTUFBTSxPQUFPLGFBQWE7SUFReEIsWUFBb0IsSUFBZ0IsRUFBVSxhQUE0QjtRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFObEUsZ0JBQVcsR0FBRztZQUNwQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkMsQ0FBQztTQUNILENBQUM7SUFHRixDQUFDO0lBRUQsNEJBQTRCO0lBQ3JCLFVBQVUsQ0FBQyxNQUFlO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ25FLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCx1REFBdUQ7SUFDaEQsYUFBYSxDQUFDLEtBQWUsRUFBRSxNQUFjLEVBQUUsTUFBZTtRQUNuRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsTUFBTSxDQUFDLFVBQVUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUM5SCxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDOzs7O1lBOUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVE8sVUFBVTtZQUlWLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT4sIEVyaWMgUm9zZW56dmVpZyA8ZXJpY0BuYXJyYS5ldT5cbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE5hcnJhIFByb2plY3RcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjArIChzZWUgQ09QWUlORyBvciBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAudHh0KVxuICovXG5cbmltcG9ydCAge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgcmV0cnl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QWN0aW9uLCBGaWx0ZXIsIFJlc3BvbnNlfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtTZXJ2ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZlci5zZXJ2aWNlJztcbmltcG9ydCB7RXJyb3JIZWxwZXJ9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25TZXJ2aWNlIHtcblxuICBwcml2YXRlIGh0dHBPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSlcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc2VydmVyU2VydmljZTogU2VydmVyU2VydmljZSkge1xuICB9XG5cbiAgLy8gR0VUIGFjdGlvbnMgJy92MS9hY3Rpb25zJ1xuICBwdWJsaWMgZ2V0QWN0aW9ucyhmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPEFjdGlvbltdLCAnYWN0aW9ucyc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih0aGlzLnNlcnZlclNlcnZpY2UucXVlcnkoJ2FjdGlvbnMnLCBmaWx0ZXIpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFBPU1QgcGVyZm9ybSBhY3Rpb24gJy92MS9hY3Rpb24vOmlkZW50aWZpZXIvcGVyZm9ybSdcbiAgcHVibGljIHBlcmZvcm1BY3Rpb24oaXRlbXM6IHN0cmluZ1tdLCBhY3Rpb246IEFjdGlvbiwgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxBY3Rpb24sICdhY3Rpb24nPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeShgYWN0aW9ucy8ke2FjdGlvbi5pZGVudGlmaWVyfS9wZXJmb3JtYCwgZmlsdGVyKSwgeyBpdGVtcyB9LCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxufVxuIl19