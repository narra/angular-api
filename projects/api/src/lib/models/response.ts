/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Error} from './error';
import {Pagination} from './pagination';

export type Response<T, Key extends string> = {
  // handle errors
  errors: Error[];
  // handle pagination
  pagination?: Pagination;
  // handle data based on Key
} & {[P in Key]: T};
