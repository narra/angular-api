/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { Item } from './item';
import { Library } from './library';
import { Project } from './project';
import { EventStatus } from '../enums';
export interface Event {
    id: string;
    message: string;
    progress: number;
    status: EventStatus;
    item: Item;
    library: Library;
    project: Project;
}
