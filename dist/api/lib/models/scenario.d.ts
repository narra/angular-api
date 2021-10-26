/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
import { ScenarioType } from '../enums';
import { Authorship } from './authorship';
export interface Scenario extends Authorship {
    id: string;
    name: string;
    description: string;
    type: ScenarioType;
    shared: boolean;
    thumbnails: string[];
    updated_at: Date;
}
