/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Scenario} from './scenario';
import {Library} from './library';
import {Authorship} from './authorship';
import {Metable} from './metable';

export interface Project extends Authorship, Metable {
  id: string;
  name: string;
  description: string;
  public: boolean;
  scenario: Scenario;
  thumbnails: string[];
  libraries: Library[];
}
