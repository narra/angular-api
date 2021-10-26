/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
export interface Module {
    name: string;
    version: string;
    summary: string;
    description: string;
    authors: string[];
    email: string[];
    homepage: string;
    license: string;
}
