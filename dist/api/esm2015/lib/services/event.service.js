/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { ServerService } from './server.service';
import { ErrorHelper } from '../helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./server.service";
export class EventService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET events by default '/v1/events/me' possibly can be modified to admin's all '/v1/events'
    getEvents(selection = 'me', filter) {
        return this.http.get(this.serverService.query('events/' + selection, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
EventService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.ServerService)); }, token: EventService, providedIn: "root" });
EventService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EventService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hcGkvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhELE9BQU8sRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFLdkMsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBb0IsSUFBZ0IsRUFBVSxhQUE0QjtRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDMUUsQ0FBQztJQUVELDZGQUE2RjtJQUN0RixTQUFTLENBQUMsWUFBb0IsSUFBSSxFQUFFLE1BQWU7UUFDeEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQy9FLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztJQUNOLENBQUM7Ozs7WUFmRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVRPLFVBQVU7WUFHVixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQ6IChjKSAyMDIxLCBNaWNoYWwgTW9jbmFrIDxtaWNoYWxAbmFycmEuZXU+LCBFcmljIFJvc2VuenZlaWcgPGVyaWNAbmFycmEuZXU+XG4gKiBDb3B5cmlnaHQ6IChjKSAyMDIxLCBOYXJyYSBQcm9qZWN0XG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2My4wKyAoc2VlIENPUFlJTkcgb3IgaHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwtMy4wLnR4dClcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtyZXRyeSwgY2F0Y2hFcnJvcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTZXJ2ZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZlci5zZXJ2aWNlJztcbmltcG9ydCB7RXZlbnQsIEZpbHRlciwgUmVzcG9uc2V9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge0Vycm9ySGVscGVyfSBmcm9tICcuLi9oZWxwZXJzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgc2VydmVyU2VydmljZTogU2VydmVyU2VydmljZSkge1xuICB9XG5cbiAgLy8gR0VUIGV2ZW50cyBieSBkZWZhdWx0ICcvdjEvZXZlbnRzL21lJyBwb3NzaWJseSBjYW4gYmUgbW9kaWZpZWQgdG8gYWRtaW4ncyBhbGwgJy92MS9ldmVudHMnXG4gIHB1YmxpYyBnZXRFdmVudHMoc2VsZWN0aW9uOiBzdHJpbmcgPSAnbWUnLCBmaWx0ZXI/OiBGaWx0ZXIpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPEV2ZW50W10sICdldmVudHMnPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5zZXJ2ZXJTZXJ2aWNlLnF1ZXJ5KCdldmVudHMvJyArIHNlbGVjdGlvbiwgZmlsdGVyKSlcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgxKSxcbiAgICAgICAgY2F0Y2hFcnJvcihFcnJvckhlbHBlci5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==