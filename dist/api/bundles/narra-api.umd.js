(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('@angular/common/http'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@narra/api', ['exports', 'rxjs', '@angular/core', '@angular/common/http', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.narra = global.narra || {}, global.narra.api = {}), global.rxjs, global.ng.core, global.ng.common.http, global.rxjs.operators));
}(this, (function (exports, rxjs, i0, i1, operators) { 'use strict';

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
    var EventStatus;
    (function (EventStatus) {
        EventStatus["pending"] = "pending";
        EventStatus["running"] = "running";
        EventStatus["done"] = "done";
    })(EventStatus || (EventStatus = {}));

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
    var ItemType;
    (function (ItemType) {
        ItemType["text"] = "text";
        ItemType["audio"] = "audio";
        ItemType["video"] = "video";
        ItemType["picture"] = "picture";
    })(ItemType || (ItemType = {}));

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
    var RoleType;
    (function (RoleType) {
        RoleType["admin"] = "admin";
        RoleType["author"] = "author";
    })(RoleType || (RoleType = {}));

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
    var ScenarioType;
    (function (ScenarioType) {
        ScenarioType["project"] = "project";
        ScenarioType["library"] = "library";
    })(ScenarioType || (ScenarioType = {}));

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
    var ErrorHelper = /** @class */ (function () {
        function ErrorHelper() {
        }
        ErrorHelper.handleError = function (error) {
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong.
                console.error("Backend returned code " + error.status + ", " +
                    ("body was: " + error.error));
            }
            // Return an observable with a user-facing error message.
            return rxjs.throwError('Something bad happened; please try again later.');
        };
        return ErrorHelper;
    }());

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
    var MetaHelper = /** @class */ (function () {
        function MetaHelper() {
        }
        MetaHelper.getMeta = function (object, name) {
            return object.metadata.find(function (meta) {
                return meta.name === name;
            });
        };
        return MetaHelper;
    }());

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
    var ServerService = /** @class */ (function () {
        function ServerService() {
            // default values
            this.server = 'http://api.narra';
            this.version = 1;
            this.initialized = false;
        }
        //
        // initialize
        //
        ServerService.prototype.initialize = function (server, version) {
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
        };
        Object.defineProperty(ServerService.prototype, "apiServer", {
            //
            // getters
            //
            get: function () {
                return this.server;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServerService.prototype, "apiVersion", {
            get: function () {
                return this.version;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServerService.prototype, "isInitialized", {
            get: function () {
                return this.initialized;
            },
            enumerable: false,
            configurable: true
        });
        //
        // public methods
        //
        ServerService.prototype.query = function (path, query) {
            // prepare params
            var params = path;
            // check for query
            if (query) {
                // prepare query param string
                params += '?';
                // prepare libraries selector
                if (query.libraries) {
                    query.libraries.forEach(function (library) {
                        params += 'libraries[]=' + library + '&';
                    });
                }
                // prepare generators selector
                if (query.generators) {
                    query.generators.forEach(function (generator) {
                        params += 'generators[]=' + generator + '&';
                    });
                }
                // prepare generators selector
                if (query.filters) {
                    query.filters.forEach(function (filter) {
                        params += 'filters[]=' + filter;
                    });
                }
            }
            return this.server + '/v' + this.version + '/' + params;
        };
        return ServerService;
    }());
    ServerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ServerService_Factory() { return new ServerService(); }, token: ServerService, providedIn: "root" });
    ServerService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ServerService.ctorParameters = function () { return []; };

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
    var ConnectorService = /** @class */ (function () {
        function ConnectorService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
        }
        // GET connectors '/v1/connectors'
        ConnectorService.prototype.getConnectors = function (query) {
            return this.http.get(this.serverService.query('connectors', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return ConnectorService;
    }());
    ConnectorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConnectorService_Factory() { return new ConnectorService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: ConnectorService, providedIn: "root" });
    ConnectorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ConnectorService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var EventService = /** @class */ (function () {
        function EventService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
        }
        // GET events by default '/v1/events/me' possibly can be modified to admin's all '/v1/events'
        EventService.prototype.getEvents = function (filter, query) {
            if (filter === void 0) { filter = 'me'; }
            return this.http.get(this.serverService.query('events/' + filter, query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return EventService;
    }());
    EventService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: EventService, providedIn: "root" });
    EventService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    EventService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var GeneratorService = /** @class */ (function () {
        function GeneratorService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
        }
        // GET generators '/v1/generators'
        GeneratorService.prototype.getGenerators = function (query) {
            return this.http.get(this.serverService.query('generators', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return GeneratorService;
    }());
    GeneratorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GeneratorService_Factory() { return new GeneratorService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: GeneratorService, providedIn: "root" });
    GeneratorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    GeneratorService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var ItemService = /** @class */ (function () {
        function ItemService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
            this.httpOptions = {
                headers: new i1.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        // POST check url '/v1/items/check'
        ItemService.prototype.check = function (url, query) {
            return this.http.post(this.serverService.query('items/check', query), { url: url }, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST new item '/v1/items/new'
        ItemService.prototype.addItems = function (candidates, query) {
            return this.http.post(this.serverService.query('items/new', query), { candidates: candidates }, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET item '/v1/items/{id}'
        ItemService.prototype.getItem = function (id, query) {
            return this.http.get(this.serverService.query('items/' + id, query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST new item metadata '/v1/items/{name}/metadata/new'
        ItemService.prototype.addItemMeta = function (id, meta, query) {
            return this.http.post(this.serverService.query('items/' + id + '/metadata/new', query), meta, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST update item metadata '/v1/items/{name}/metadata/{meta}/update'
        ItemService.prototype.updateItemMeta = function (id, meta, query) {
            return this.http.post(this.serverService.query('items/' + id + '/metadata/' + meta.name + '/update', query), meta, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET delete item metadata '/v1/items/{name}/metadata/{meta}/delete'
        ItemService.prototype.deleteItemMeta = function (id, meta) {
            return this.http.get(this.serverService.query('items/' + id + '/metadata/' + meta.name + '/delete?generator=' + meta.generator))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return ItemService;
    }());
    ItemService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ItemService_Factory() { return new ItemService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: ItemService, providedIn: "root" });
    ItemService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ItemService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var LibraryService = /** @class */ (function () {
        function LibraryService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
            this.httpOptions = {
                headers: new i1.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        // POST validate '/v1/libraries/validate'
        LibraryService.prototype.validate = function (name, query) {
            return this.http.post(this.serverService.query('libraries/validate', query), { name: name }, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET libraries '/v1/libraries'
        LibraryService.prototype.getLibraries = function (query) {
            return this.http.get(this.serverService.query('libraries', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET library '/v1/libraries/{id}'
        LibraryService.prototype.getLibrary = function (id, query) {
            return this.http.get(this.serverService.query('libraries/' + id, query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET library items '/v1/libraries/{id}/items'
        LibraryService.prototype.getItems = function (id, query) {
            return this.http.get(this.serverService.query('libraries/' + id + '/items', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST new library '/v1/libraries/new'
        LibraryService.prototype.addLibrary = function (library, query) {
            return this.http.post(this.serverService.query('libraries/new', query), library, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST update library '/v1/libraries/{id}/update'
        LibraryService.prototype.updateLibrary = function (library, query) {
            return this.http.post(this.serverService.query('libraries/' + library.id + '/update', query), library, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET delete library '/v1/libraries/{id}/delete'
        LibraryService.prototype.deleteLibrary = function (id) {
            return this.http.get(this.serverService.query('libraries/' + id + '/delete'))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST new library metadata '/v1/libraries/{name}/metadata/new'
        LibraryService.prototype.addLibraryMeta = function (id, meta, query) {
            return this.http.post(this.serverService.query('libraries/' + id + '/metadata/new', query), meta, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST update library metadata '/v1/libraries/{name}/metadata/{meta}/update'
        LibraryService.prototype.updateLibraryMeta = function (id, meta, query) {
            return this.http.post(this.serverService.query('libraries/' + id + '/metadata/' + meta.name + '/update', query), meta, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET delete library metadata '/v1/libraries/{name}/metadata/{meta}/delete'
        LibraryService.prototype.deleteLibraryMeta = function (id, meta) {
            return this.http.get(this.serverService.query('libraries/' + id + '/metadata/' + meta.name + '/delete'))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return LibraryService;
    }());
    LibraryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LibraryService_Factory() { return new LibraryService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: LibraryService, providedIn: "root" });
    LibraryService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LibraryService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var ProjectService = /** @class */ (function () {
        function ProjectService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
            this.httpOptions = {
                headers: new i1.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        // POST validate '/v1/projects/validate'
        ProjectService.prototype.validate = function (id, name, query) {
            return this.http.post(this.serverService.query('projects/validate', query), { id: id, name: name }, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET projects '/v1/projects'
        ProjectService.prototype.getProjects = function (query) {
            return this.http.get(this.serverService.query('projects', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET project '/v1/projects/{name}'
        ProjectService.prototype.getProject = function (id, query) {
            return this.http.get(this.serverService.query('projects/' + id, query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET project '/v1/projects/{name}/items'
        ProjectService.prototype.getProjectItems = function (id, query) {
            return this.http.get(this.serverService.query('projects/' + id + '/items', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST new project '/v1/projects/new'
        ProjectService.prototype.addProject = function (project, query) {
            return this.http.post(this.serverService.query('projects/new', query), project, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST update project '/v1/projects/{name}/update'
        ProjectService.prototype.updateProject = function (project, query) {
            return this.http.post(this.serverService.query('projects/' + project.id + '/update', query), project, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET delete project '/v1/projects/{name}/delete'
        ProjectService.prototype.deleteProject = function (id) {
            return this.http.get(this.serverService.query('projects/' + id + '/delete'))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST new project metadata '/v1/projects/{name}/metadata/new'
        ProjectService.prototype.addProjectMeta = function (id, meta, query) {
            return this.http.post(this.serverService.query('projects/' + id + '/metadata/new', query), meta, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST update project metadata '/v1/projects/{name}/metadata/{meta}/update'
        ProjectService.prototype.updateProjectMeta = function (id, meta, query) {
            return this.http.post(this.serverService.query('projects/' + id + '/metadata/' + meta.name + '/update', query), meta, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET delete project metadata '/v1/projects/{name}/metadata/{meta}/delete'
        ProjectService.prototype.deleteProjectMeta = function (id, meta) {
            return this.http.get(this.serverService.query('projects/' + id + '/metadata/' + meta.name + '/delete'))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return ProjectService;
    }());
    ProjectService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProjectService_Factory() { return new ProjectService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: ProjectService, providedIn: "root" });
    ProjectService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ProjectService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var ProviderService = /** @class */ (function () {
        function ProviderService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
        }
        // GET authentication providers '/auth/providers'
        ProviderService.prototype.getProviders = function () {
            return this.http.get(this.serverService.apiServer + '/auth/providers')
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return ProviderService;
    }());
    ProviderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProviderService_Factory() { return new ProviderService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: ProviderService, providedIn: "root" });
    ProviderService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ProviderService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var ScenarioService = /** @class */ (function () {
        function ScenarioService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
        }
        // GET scenarios '/v1/scenarios'
        ScenarioService.prototype.getScenarios = function () {
            return this.http.get(this.serverService.query('scenarios'))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET scenario '/v1/scenarios/{id}'
        ScenarioService.prototype.getScenario = function (id) {
            return this.http.get(this.serverService.query('scenarios/' + id))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return ScenarioService;
    }());
    ScenarioService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScenarioService_Factory() { return new ScenarioService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: ScenarioService, providedIn: "root" });
    ScenarioService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ScenarioService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var SettingService = /** @class */ (function () {
        function SettingService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
            this.httpOptions = {
                headers: new i1.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        // GET settings '/v1/settings'
        SettingService.prototype.getSettings = function (query) {
            return this.http.get(this.serverService.query('settings', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET setting '/v1/settings/{name}'
        SettingService.prototype.getSetting = function (name, query) {
            return this.http.get(this.serverService.query('settings/' + name, query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST update setting '/v1/settings/{name}/update'
        SettingService.prototype.updateSetting = function (setting, query) {
            return this.http.post(this.serverService.query('settings/' + name + '/update', query), setting, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET settings default values '/v1/settings/defaults'
        SettingService.prototype.getDefaults = function (query) {
            return this.http.get(this.serverService.query('settings/defaults', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return SettingService;
    }());
    SettingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SettingService_Factory() { return new SettingService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: SettingService, providedIn: "root" });
    SettingService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SettingService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var SynthesizerService = /** @class */ (function () {
        function SynthesizerService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
        }
        // GET synthesizers '/v1/synthesizers'
        SynthesizerService.prototype.getSynthesizers = function (query) {
            return this.http.get(this.serverService.query('synthesizers', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return SynthesizerService;
    }());
    SynthesizerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SynthesizerService_Factory() { return new SynthesizerService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: SynthesizerService, providedIn: "root" });
    SynthesizerService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SynthesizerService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var SystemService = /** @class */ (function () {
        function SystemService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
        }
        // GET users '/v1/system/version'
        SystemService.prototype.getVersion = function (query) {
            return this.http.get(this.serverService.query('system/version', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET users '/v1/system/modules'
        SystemService.prototype.getModules = function (query) {
            return this.http.get(this.serverService.query('system/modules', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return SystemService;
    }());
    SystemService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SystemService_Factory() { return new SystemService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: SystemService, providedIn: "root" });
    SystemService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SystemService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var UploadService = /** @class */ (function () {
        function UploadService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
        }
        // POST upload '/v1/upload'
        UploadService.prototype.upload = function (file) {
            // prepare data
            var uploadData = new FormData();
            // set file
            uploadData.append('file', file);
            // upload
            return this.http.post(this.serverService.query('upload'), uploadData, {
                reportProgress: true,
                observe: 'events'
            }).pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return UploadService;
    }());
    UploadService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UploadService_Factory() { return new UploadService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: UploadService, providedIn: "root" });
    UploadService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    UploadService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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
    var UserService = /** @class */ (function () {
        function UserService(http, serverService) {
            this.http = http;
            this.serverService = serverService;
            this.httpOptions = {
                headers: new i1.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        // GET logged user '/v1/users/me'
        UserService.prototype.getLoggedUser = function (query) {
            return this.http.get(this.serverService.query('users/me', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET users '/v1/users'
        UserService.prototype.getUsers = function (query) {
            return this.http.get(this.serverService.query('users', query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET user '/v1/users/{username}'
        UserService.prototype.getUser = function (username, query) {
            return this.http.get(this.serverService.query('users/' + username, query))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // GET delete user '/v1/users/{username}/delete'
        UserService.prototype.deleteUser = function (username) {
            return this.http.get(this.serverService.query('users/' + username + '/delete'))
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        // POST update user '/v1/users/{username}/update'
        UserService.prototype.updateUser = function (user, query) {
            return this.http.post(this.serverService.query('users/' + user.username + '/update', query), user, this.httpOptions)
                .pipe(operators.retry(1), operators.catchError(ErrorHelper.handleError));
        };
        return UserService;
    }());
    UserService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(ServerService)); }, token: UserService, providedIn: "root" });
    UserService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    UserService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: ServerService }
    ]; };

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

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        get EventStatus () { return EventStatus; },
        get ItemType () { return ItemType; },
        get RoleType () { return RoleType; },
        get ScenarioType () { return ScenarioType; },
        ErrorHelper: ErrorHelper,
        MetaHelper: MetaHelper,
        ConnectorService: ConnectorService,
        EventService: EventService,
        GeneratorService: GeneratorService,
        ItemService: ItemService,
        LibraryService: LibraryService,
        ProjectService: ProjectService,
        ProviderService: ProviderService,
        ScenarioService: ScenarioService,
        ServerService: ServerService,
        SettingService: SettingService,
        SynthesizerService: SynthesizerService,
        SystemService: SystemService,
        UploadService: UploadService,
        UserService: UserService
    });

    /*
     * Public API Surface of @narra/api
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.narra = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=narra-api.umd.js.map
