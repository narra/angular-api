/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { ItemType } from '../enums';
import { Selectable } from './selectable';
export interface Proxy extends Selectable {
    name: string;
    type: ItemType;
    source_url: string;
    download_url: string;
    thumbnails: string[];
    connector: string;
    options: {};
}
