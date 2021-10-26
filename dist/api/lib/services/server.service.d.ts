/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { Pagination, Filter, Selector, Query } from '../models';
export declare class ServerService {
    private server;
    private version;
    private initialized;
    constructor();
    initialize(server?: string, version?: number): void;
    get apiServer(): string;
    get apiVersion(): number;
    get isInitialized(): boolean;
    query(path: string, filter?: Filter, pagination?: Pagination, query?: Query, selectors?: Selector[]): string;
}
