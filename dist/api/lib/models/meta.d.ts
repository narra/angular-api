/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
export interface Meta {
    name: string;
    value: string;
    generator: string;
    public: boolean;
    in?: number;
    out?: number;
    updated_at: Date;
}
