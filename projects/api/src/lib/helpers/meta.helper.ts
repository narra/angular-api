/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */

import {Meta, Metable} from '../models';

export class MetaHelper {

  public static getMeta(object: Metable, name: string): Meta {
    return object.metadata.find((meta) => {
      return meta.name === name;
    });
  }
}
