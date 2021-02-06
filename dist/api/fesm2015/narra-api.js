import { throwError } from 'rxjs';
import { ɵɵdefineInjectable, Injectable, ɵɵinject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

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
class MetaHelper {
    static getMeta(object, name) {
        return object.metadata.find((meta) => {
            return meta.name === name;
        });
    }
}

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
class ServerService {
    constructor() {
        // default values
        this.server = 'http://api.narra';
        this.version = 1;
    }
    //
    // setters
    //
    set apiServer(server) {
        this.server = server;
    }
    //
    // getters
    //
    get apiServer() {
        return this.server;
    }
    //
    // public methods
    //
    query(path) {
        return this.server + '/v' + this.version + '/' + path;
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
class ConnectorService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET connectors '/v1/connectors'
    getConnectors() {
        return this.http.get(this.serverService.query('connectors'))
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
class EventService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET events by default '/v1/events/me' possibly can be modified to admin's all '/v1/events'
    getEvents(filter = 'me') {
        return this.http.get(this.serverService.query('events/' + filter))
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
class GeneratorService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET generators '/v1/generators'
    getGenerators() {
        return this.http.get(this.serverService.query('generators'))
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
    check(url) {
        return this.http.post(this.serverService.query('items/check'), { url }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new item '/v1/items/new'
    addItems(candidates) {
        return this.http.post(this.serverService.query('items/new'), { candidates }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET item '/v1/items/{id}'
    getItem(id) {
        return this.http.get(this.serverService.query('items/' + id))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new item metadata '/v1/items/{name}/metadata/new'
    addItemMeta(id, meta) {
        return this.http.post(this.serverService.query('items/' + id + '/metadata/new'), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update item metadata '/v1/items/{name}/metadata/{meta}/update'
    updateItemMeta(id, meta) {
        return this.http.post(this.serverService.query('items/' + id + '/metadata/' + meta.name + '/update'), meta, this.httpOptions)
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
    validate(name) {
        return this.http.post(this.serverService.query('libraries/validate'), { name }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET libraries '/v1/libraries'
    getLibraries() {
        return this.http.get(this.serverService.query('libraries'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET library '/v1/libraries/{id}'
    getLibrary(id) {
        return this.http.get(this.serverService.query('libraries/' + id))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET library items '/v1/libraries/{id}/items'
    getItems(id) {
        return this.http.get(this.serverService.query('libraries/' + id + '/items'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new library '/v1/libraries/new'
    addLibrary(library) {
        return this.http.post(this.serverService.query('libraries/new'), library, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update library '/v1/libraries/{id}/update'
    updateLibrary(library) {
        return this.http.post(this.serverService.query('libraries/' + library.id + '/update'), library, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete library '/v1/libraries/{id}/delete'
    deleteLibrary(id) {
        return this.http.get(this.serverService.query('libraries/' + id + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new library metadata '/v1/libraries/{name}/metadata/new'
    addLibraryMeta(id, meta) {
        return this.http.post(this.serverService.query('libraries/' + id + '/metadata/new'), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update library metadata '/v1/libraries/{name}/metadata/{meta}/update'
    updateLibraryMeta(id, meta) {
        return this.http.post(this.serverService.query('libraries/' + id + '/metadata/' + meta.name + '/update'), meta, this.httpOptions)
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
    validate(id, name) {
        return this.http.post(this.serverService.query('projects/validate'), { id, name }, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET projects '/v1/projects'
    getProjects() {
        return this.http.get(this.serverService.query('projects'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET project '/v1/projects/{name}'
    getProject(id) {
        return this.http.get(this.serverService.query('projects/' + id))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new project '/v1/projects/new'
    addProject(project) {
        return this.http.post(this.serverService.query('projects/new'), project, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update project '/v1/projects/{name}/update'
    updateProject(project) {
        return this.http.post(this.serverService.query('projects/' + project.id + '/update'), project, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete project '/v1/projects/{name}/delete'
    deleteProject(id) {
        return this.http.get(this.serverService.query('projects/' + id + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST new project metadata '/v1/projects/{name}/metadata/new'
    addProjectMeta(id, meta) {
        return this.http.post(this.serverService.query('projects/' + id + '/metadata/new'), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update project metadata '/v1/projects/{name}/metadata/{meta}/update'
    updateProjectMeta(id, meta) {
        return this.http.post(this.serverService.query('projects/' + id + '/metadata/' + meta.name + '/update'), meta, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete project metadata '/v1/projects/{name}/metadata/{meta}/delete'
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
    getSettings() {
        return this.http.get(this.serverService.query('settings'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET setting '/v1/settings/{name}'
    getSetting(name) {
        return this.http.get(this.serverService.query('settings/' + name))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update setting '/v1/settings/{name}/update'
    updateSetting(setting) {
        return this.http.post(this.serverService.query('settings/' + name + '/update'), setting, this.httpOptions)
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET settings default values '/v1/settings/defaults'
    getDefaults() {
        return this.http.get(this.serverService.query('settings/defaults'))
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
class SynthesizerService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET synthesizers '/v1/synthesizers'
    getSynthesizers() {
        return this.http.get(this.serverService.query('synthesizers'))
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
class SystemService {
    constructor(http, serverService) {
        this.http = http;
        this.serverService = serverService;
    }
    // GET users '/v1/system/version'
    getVersion() {
        return this.http.get(this.serverService.query('system/version'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET users '/v1/system/modules'
    getModules() {
        return this.http.get(this.serverService.query('system/modules'))
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
    getLoggedUser() {
        return this.http.get(this.serverService.query('users/me'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET users '/v1/users'
    getUsers() {
        return this.http.get(this.serverService.query('users'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET user '/v1/users/{username}'
    getUser(username) {
        return this.http.get(this.serverService.query('users/' + username))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // GET delete user '/v1/users/{username}/delete'
    deleteUser(username) {
        return this.http.get(this.serverService.query('users/' + username + '/delete'))
            .pipe(retry(1), catchError(ErrorHelper.handleError));
    }
    // POST update user '/v1/users/{username}/update'
    updateUser(user) {
        return this.http.post(this.serverService.query('users/' + user.username + '/update'), user, this.httpOptions)
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

export { index as narra };
//# sourceMappingURL=narra-api.js.map
