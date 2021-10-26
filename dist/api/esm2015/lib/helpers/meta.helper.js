/**
 * Copyright: (c) 2021, Michal Mocnak <michal@narra.eu>, Eric Rosenzveig <eric@narra.eu>
 * Copyright: (c) 2021, Narra Project
 * GNU General Public License v3.0+ (see COPYING or https://www.gnu.org/licenses/gpl-3.0.txt)
 */
export class MetaHelper {
    static getMeta(object, name) {
        return object.metadata.find((meta) => {
            return meta.name === name;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS5oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYXBpL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL21ldGEuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFJSCxNQUFNLE9BQU8sVUFBVTtJQUVkLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBZSxFQUFFLElBQVk7UUFDakQsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE1pY2hhbCBNb2NuYWsgPG1pY2hhbEBuYXJyYS5ldT4sIEVyaWMgUm9zZW56dmVpZyA8ZXJpY0BuYXJyYS5ldT5cbiAqIENvcHlyaWdodDogKGMpIDIwMjEsIE5hcnJhIFByb2plY3RcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHYzLjArIChzZWUgQ09QWUlORyBvciBodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAudHh0KVxuICovXG5cbmltcG9ydCB7TWV0YSwgTWV0YWJsZX0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGNsYXNzIE1ldGFIZWxwZXIge1xuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TWV0YShvYmplY3Q6IE1ldGFibGUsIG5hbWU6IHN0cmluZyk6IE1ldGEge1xuICAgIHJldHVybiBvYmplY3QubWV0YWRhdGEuZmluZCgobWV0YSkgPT4ge1xuICAgICAgcmV0dXJuIG1ldGEubmFtZSA9PT0gbmFtZTtcbiAgICB9KTtcbiAgfVxufVxuIl19