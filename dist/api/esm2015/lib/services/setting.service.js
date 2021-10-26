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
export class SettingService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // GET settings '/v1/settings'
    getSettings(filter) {
        return this.http.get(this.serverService.query('settings', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET setting '/v1/settings/{name}'
    getSetting(name, filter) {
        return this.http.get(this.serverService.query('settings/' + name, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update setting '/v1/settings/{name}/update'
    updateSetting(setting, filter) {
        return this.http.post(this.serverService.query('settings/' + name + '/update', filter), setting, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET settings default values '/v1/settings/defaults'
    getDefaults(filter) {
        return this.http.get(this.serverService.query('settings/defaults', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
SettingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SettingService_Factory() { return new SettingService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ServerService)); }, token: SettingService, providedIn: "root" });
SettingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SettingService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FwaS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHN0QsT0FBTyxFQUFDLFVBQVUsRUFBTyxLQUFLLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sY0FBYztJQVF6QixZQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQU5sRSxnQkFBVyxHQUFHO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0gsQ0FBQztJQUdGLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsV0FBVyxDQUFDLE1BQWU7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDcEUsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDUixVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVELG9DQUFvQztJQUM3QixVQUFVLENBQUMsSUFBWSxFQUFFLE1BQWU7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzVFLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxtREFBbUQ7SUFDNUMsYUFBYSxDQUFDLE9BQWdCLEVBQUUsTUFBZTtRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3BILElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7SUFFRCxzREFBc0Q7SUFDL0MsV0FBVyxDQUFDLE1BQWU7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM3RSxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNSLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7SUFDTixDQUFDOzs7O1lBaERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBVE8sVUFBVTtZQUlWLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT4sIEVyaWMgUm9zZW56dmVpZyA8ZXJpY0BuYXJyYS5ldT5cbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE5hcnJhIFByb2plY3RcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjArIChzZWUgQ09QWUlORyBvciBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAudHh0KVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtGaWx0ZXIsIFJlc3BvbnNlLCBTZXR0aW5nfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBtYXAsIHJldHJ5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1NlcnZlclNlcnZpY2V9IGZyb20gJy4vc2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtFcnJvckhlbHBlcn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdTZXJ2aWNlIHtcblxuICBwcml2YXRlIGh0dHBPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSlcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc2VydmVyU2VydmljZTogU2VydmVyU2VydmljZSkge1xuICB9XG5cbiAgLy8gR0VUIHNldHRpbmdzICcvdjEvc2V0dGluZ3MnXG4gIHB1YmxpYyBnZXRTZXR0aW5ncyhmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPFNldHRpbmdbXSwgJ3NldHRpbmdzJz4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHRoaXMuc2VydmVyU2VydmljZS5xdWVyeSgnc2V0dGluZ3MnLCBmaWx0ZXIpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDEpLFxuICAgICAgICBjYXRjaEVycm9yKEVycm9ySGVscGVyLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIEdFVCBzZXR0aW5nICcvdjEvc2V0dGluZ3Mve25hbWV9J1xuICBwdWJsaWMgZ2V0U2V0dGluZyhuYW1lOiBzdHJpbmcsIGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8U2V0dGluZywgJ3NldHRpbmcnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdzZXR0aW5ncy8nICsgbmFtZSwgZmlsdGVyKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBQT1NUIHVwZGF0ZSBzZXR0aW5nICcvdjEvc2V0dGluZ3Mve25hbWV9L3VwZGF0ZSdcbiAgcHVibGljIHVwZGF0ZVNldHRpbmcoc2V0dGluZzogU2V0dGluZywgZmlsdGVyPzogRmlsdGVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZTxTZXR0aW5nLCAnc2V0dGluZyc+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdzZXR0aW5ncy8nICsgbmFtZSArICcvdXBkYXRlJywgZmlsdGVyKSwgc2V0dGluZywgdGhpcy5odHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvLyBHRVQgc2V0dGluZ3MgZGVmYXVsdCB2YWx1ZXMgJy92MS9zZXR0aW5ncy9kZWZhdWx0cydcbiAgcHVibGljIGdldERlZmF1bHRzKGZpbHRlcj86IEZpbHRlcik6IE9ic2VydmFibGU8UmVzcG9uc2U8U2V0dGluZ1tdLCAnc2V0dGluZ3MnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdzZXR0aW5ncy9kZWZhdWx0cycsIGZpbHRlcikpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMSksXG4gICAgICAgIGNhdGNoRXJyb3IoRXJyb3JIZWxwZXIuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG59XG4iXX0=