import { throwError } from 'rxjs';
import { ɵɵdefineInjectable, Injectable, ɵɵinject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
var EventStatus;
(function (EventStatus) {
    EventStatus["pending"] = "pending";
    EventStatus["running"] = "running";
    EventStatus["done"] = "done";
})(EventStatus || (EventStatus = {}));

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
var ItemType;
(function (ItemType) {
    ItemType["text"] = "text";
    ItemType["audio"] = "audio";
    ItemType["video"] = "video";
    ItemType["picture"] = "picture";
})(ItemType || (ItemType = {}));

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
var QueryOperator;
(function (QueryOperator) {
    QueryOperator["or"] = "or";
    QueryOperator["and"] = "and";
})(QueryOperator || (QueryOperator = {}));

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
var RoleType;
(function (RoleType) {
    RoleType["admin"] = "admin";
    RoleType["author"] = "author";
})(RoleType || (RoleType = {}));

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
var ScenarioType;
(function (ScenarioType) {
    ScenarioType["project"] = "project";
    ScenarioType["library"] = "library";
})(ScenarioType || (ScenarioType = {}));

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class ErrorHelper {
    static handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError('Something bad happened; please try again later.');
    }
}

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class MetaHelper {
    static getMeta(object, name) {
        return object.metadata.find((meta) => {
            return meta.name === name;
        });
    }
}

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class ServerService {
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
ServerService.ɵprov = ɵɵdefineInjectable({ factory: function ServerService_Factory() { return new ServerService(); }, token: ServerService, providedIn: "root" });
ServerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ServerService.ctorParameters = () => [];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class ActionService {
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
ActionService.ɵprov = ɵɵdefineInjectable({ factory: function ActionService_Factory() { return new ActionService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: ActionService, providedIn: "root" });
ActionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ActionService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class ConnectorService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET connectors '/v1/connectors'
    getConnectors(filter) {
        return this.http.get(this.serverService.query('connectors', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
ConnectorService.ɵprov = ɵɵdefineInjectable({ factory: function ConnectorService_Factory() { return new ConnectorService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: ConnectorService, providedIn: "root" });
ConnectorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ConnectorService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class EventService {
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
EventService.ɵprov = ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: EventService, providedIn: "root" });
EventService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EventService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class GeneratorService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET generators '/v1/generators'
    getGenerators(filter) {
        return this.http.get(this.serverService.query('generators', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
GeneratorService.ɵprov = ɵɵdefineInjectable({ factory: function GeneratorService_Factory() { return new GeneratorService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: GeneratorService, providedIn: "root" });
GeneratorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GeneratorService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class ItemService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST check url '/v1/items/check'
    check(url, filter) {
        return this.http.post(this.serverService.query('items/check', filter), { url }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new item '/v1/items/new'
    addItems(candidates, filter) {
        return this.http.post(this.serverService.query('items/new', filter), { candidates }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET item '/v1/items/{id}'
    getItem(id, filter) {
        return this.http.get(this.serverService.query('items/' + id, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new item metadata '/v1/items/{name}/metadata/new'
    addItemMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('items/' + id + '/metadata/new', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update item metadata '/v1/items/{name}/metadata/{meta}/update'
    updateItemMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('items/' + id + '/metadata/' + meta.name + '/update', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete item metadata '/v1/items/{name}/metadata/{meta}/delete'
    deleteItemMeta(id, meta) {
        return this.http.get(this.serverService.query('items/' + id + '/metadata/' + meta.name + '/delete?generator=' + meta.generator))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
ItemService.ɵprov = ɵɵdefineInjectable({ factory: function ItemService_Factory() { return new ItemService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: ItemService, providedIn: "root" });
ItemService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ItemService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class LibraryService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST validate '/v1/libraries/validate'
    validate(name, filter) {
        return this.http.post(this.serverService.query('libraries/validate', filter), { name }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET libraries '/v1/libraries'
    getLibraries(filter) {
        return this.http.get(this.serverService.query('libraries', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET library '/v1/libraries/{id}'
    getLibrary(id, filter) {
        return this.http.get(this.serverService.query('libraries/' + id, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET library items '/v1/libraries/{id}/items'
    getItems(id, filter, pagination, query) {
        return this.http.get(this.serverService.query('libraries/' + id + '/items', filter, pagination, query))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST delete library items '/v1/libraries/{id}/items/delete'
    deleteItems(id, items) {
        return this.http.post(this.serverService.query('libraries/' + id + '/items/delete'), { items }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new library '/v1/libraries/new'
    addLibrary(library, filter) {
        return this.http.post(this.serverService.query('libraries/new', filter), library, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update library '/v1/libraries/{id}/update'
    updateLibrary(library, filter) {
        return this.http.post(this.serverService.query('libraries/' + library.id + '/update', filter), library, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET clean library '/v1/libraries/{id}/clean'
    cleanLibrary(id) {
        return this.http.get(this.serverService.query('libraries/' + id + '/clean'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete library '/v1/libraries/{id}/delete'
    deleteLibrary(id) {
        return this.http.get(this.serverService.query('libraries/' + id + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST export project '/v1/libraries/{id}/export'
    exportLibrary(id) {
        return this.http.get(this.serverService.query('libraries/' + id + '/export'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST import library '/v1/libraries/{id}/import'
    importLibrary(id, file) {
        // prepare data
        const uploadData = new FormData();
        // set file
        uploadData.append('file', file);
        // upload
        return this.http.post(this.serverService.query('libraries/' + id + '/import'), uploadData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST copy library '/v1/libraries/{id}/copy'
    copyLibrary(id, destination) {
        return this.http.post(this.serverService.query('libraries/' + id + '/copy'), { destination }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new library metadata '/v1/libraries/{name}/metadata/new'
    addLibraryMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('libraries/' + id + '/metadata/new', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update library metadata '/v1/libraries/{name}/metadata/{meta}/update'
    updateLibraryMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('libraries/' + id + '/metadata/' + meta.name + '/update', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete library metadata '/v1/libraries/{name}/metadata/{meta}/delete'
    deleteLibraryMeta(id, meta) {
        return this.http.get(this.serverService.query('libraries/' + id + '/metadata/' + meta.name + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
LibraryService.ɵprov = ɵɵdefineInjectable({ factory: function LibraryService_Factory() { return new LibraryService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: LibraryService, providedIn: "root" });
LibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LibraryService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class ProjectService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST validate '/v1/projects/validate'
    validate(id, name, filter) {
        return this.http.post(this.serverService.query('projects/validate', filter), { id, name }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET projects '/v1/projects'
    getProjects(filter) {
        return this.http.get(this.serverService.query('projects', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET project '/v1/projects/{name}'
    getProject(id, filter) {
        return this.http.get(this.serverService.query('projects/' + id, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET project's items '/v1/projects/{id}/items'
    // default libraries selector: all
    // default meta selector: none
    getProjectItems(id, libraries, meta, query, filter, pagination) {
        // prepare selectors
        const selectors = [];
        // libraries selector
        if (libraries) {
            selectors.push({ name: 'libraries', content: libraries });
        }
        // meta selector
        if (meta) {
            selectors.push({ name: 'meta', content: meta });
        }
        return this.http.get(this.serverService.query('projects/' + id + '/items', filter, pagination, query, selectors))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET project's libraries '/v1/projects/{id}/libraries'
    getProjectLibraries(id, filter) {
        return this.http.get(this.serverService.query('projects/' + id + '/libraries', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET project's library '/v1/projects/{id}/libraries/{library}'
    getProjectLibrary(id, library, filter) {
        return this.http.get(this.serverService.query('projects/' + id + '/libraries/' + library, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new project '/v1/projects/new'
    addProject(project, filter) {
        return this.http.post(this.serverService.query('projects/new', filter), project, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update project '/v1/projects/{id}/update'
    updateProject(project, filter) {
        return this.http.post(this.serverService.query('projects/' + project.id + '/update', filter), project, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete project '/v1/projects/{id}/delete'
    deleteProject(id) {
        return this.http.get(this.serverService.query('projects/' + id + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET export project '/v1/projects/{id}/export'
    exportProject(id) {
        return this.http.get(this.serverService.query('projects/' + id + '/export'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST export project '/v1/projects/{id}/export'
    importProject(id, file) {
        // prepare data
        const uploadData = new FormData();
        // set file
        uploadData.append('file', file);
        // upload
        return this.http.post(this.serverService.query('projects/' + id + '/import'), uploadData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST copy project '/v1/projects/{id}/copy'
    copyProject(id, destination) {
        return this.http.post(this.serverService.query('projects/' + id + '/copy'), { destination }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new project metadata '/v1/projects/{id}/metadata/new'
    addProjectMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('projects/' + id + '/metadata/new', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update project metadata '/v1/projects/{id}/metadata/{meta}/update'
    updateProjectMeta(id, meta, filter) {
        return this.http.post(this.serverService.query('projects/' + id + '/metadata/' + meta.name + '/update', filter), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete project metadata '/v1/projects/{id}/metadata/{meta}/delete'
    deleteProjectMeta(id, meta) {
        return this.http.get(this.serverService.query('projects/' + id + '/metadata/' + meta.name + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
ProjectService.ɵprov = ɵɵdefineInjectable({ factory: function ProjectService_Factory() { return new ProjectService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: ProjectService, providedIn: "root" });
ProjectService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProjectService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class ProviderService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET authentication providers '/auth/providers'
    getProviders() {
        return this.http.get(this.serverService.apiServer + '/auth/providers')
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
ProviderService.ɵprov = ɵɵdefineInjectable({ factory: function ProviderService_Factory() { return new ProviderService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: ProviderService, providedIn: "root" });
ProviderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ProviderService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class ReturnService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET return '/v1/returns/:id'
    getReturn(id, filter) {
        return this.http.get(this.serverService.query('returns/' + id, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
ReturnService.ɵprov = ɵɵdefineInjectable({ factory: function ReturnService_Factory() { return new ReturnService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: ReturnService, providedIn: "root" });
ReturnService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ReturnService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class ScenarioService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET scenarios '/v1/scenarios'
    getScenarios() {
        return this.http.get(this.serverService.query('scenarios'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET scenario '/v1/scenarios/{id}'
    getScenario(id) {
        return this.http.get(this.serverService.query('scenarios/' + id))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
ScenarioService.ɵprov = ɵɵdefineInjectable({ factory: function ScenarioService_Factory() { return new ScenarioService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: ScenarioService, providedIn: "root" });
ScenarioService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ScenarioService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class SettingService {
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
SettingService.ɵprov = ɵɵdefineInjectable({ factory: function SettingService_Factory() { return new SettingService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: SettingService, providedIn: "root" });
SettingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SettingService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class SynthesizerService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET synthesizers '/v1/synthesizers'
    getSynthesizers(filter) {
        return this.http.get(this.serverService.query('synthesizers', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
SynthesizerService.ɵprov = ɵɵdefineInjectable({ factory: function SynthesizerService_Factory() { return new SynthesizerService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: SynthesizerService, providedIn: "root" });
SynthesizerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SynthesizerService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class SystemService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET version '/v1/system/version'
    getVersion(filter) {
        return this.http.get(this.serverService.query('system/version', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET modules '/v1/system/modules'
    getModules(filter) {
        return this.http.get(this.serverService.query('system/modules', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET log '/v1/system/logs'
    getLogs(filter) {
        return this.http.get(this.serverService.query('system/logs', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
SystemService.ɵprov = ɵɵdefineInjectable({ factory: function SystemService_Factory() { return new SystemService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: SystemService, providedIn: "root" });
SystemService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SystemService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class UploadService {
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
UploadService.ɵprov = ɵɵdefineInjectable({ factory: function UploadService_Factory() { return new UploadService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: UploadService, providedIn: "root" });
UploadService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UploadService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
class UserService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // GET logged user '/v1/users/me'
    getLoggedUser(filter) {
        return this.http.get(this.serverService.query('users/me', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET users '/v1/users'
    getUsers(filter) {
        return this.http.get(this.serverService.query('users', filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET user '/v1/users/{id}'
    getUser(id, filter) {
        return this.http.get(this.serverService.query('users/' + id, filter))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete user '/v1/users/{id}/delete'
    deleteUser(id) {
        return this.http.get(this.serverService.query('users/' + id + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update user '/v1/users/{id}/update'
    updateUser(user, filter) {
        return this.http.post(this.serverService.query('users/' + user.id + '/update', filter), user, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
}
UserService.ɵprov = ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(ɵɵinject(HttpClient), ɵɵinject(ServerService)); }, token: UserService, providedIn: "root" });
UserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UserService.ctorParameters = () => [
    { type: HttpClient },
    { type: ServerService }
];

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get EventStatus () { return EventStatus; },
    get ItemType () { return ItemType; },
    get QueryOperator () { return QueryOperator; },
    get RoleType () { return RoleType; },
    get ScenarioType () { return ScenarioType; },
    ErrorHelper: ErrorHelper,
    MetaHelper: MetaHelper,
    ActionService: ActionService,
    ConnectorService: ConnectorService,
    EventService: EventService,
    GeneratorService: GeneratorService,
    ItemService: ItemService,
    LibraryService: LibraryService,
    ProjectService: ProjectService,
    ProviderService: ProviderService,
    ReturnService: ReturnService,
    ScenarioService: ScenarioService,
    ServerService: ServerService,
    SettingService: SettingService,
    SynthesizerService: SynthesizerService,
    SystemService: SystemService,
    UploadService: UploadService,
    UserService: UserService
});

/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

/**
 * Generated bundle index. Do not edit.
 */

export { index as narra };
//# sourceMappingURL=narra-api.js.map
