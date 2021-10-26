/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { Library } from './library';
import { ItemType } from '../enums';
import { Purgable } from './purgable';
import { Pendable } from './pendable';
import { Metable } from './metable';
export interface Item extends Purgable, Pendable, Metable {
    id: string;
    name: string;
    url: string;
    connector: string;
    type: ItemType;
    thumbnails: string[];
    library: Library;
}
