/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Scenario} from './scenario';
import {Authorship} from './authorship';
import {Purgable} from './purgable';
import {Metable} from './metable';

export interface Library extends Authorship, Purgable, Metable {
  id: string;
  name: string;
  description: string;
  shared: boolean;
  scenario: Scenario;
  thumbnails: string[];
  updated_at: Date;
}
