import Calendar from 'pages/Calendario';
import Noticias from 'pages/Noticias';
import Malla from 'pages/Malla';

/**
 * STRUCTURE:
 * routes is a object where every key is the start of the path,
 * ex: aisles is the start to /aisles, /aisles/:id and /aisles/history/:id
 * all this paths have:
 * - name (display in sidebar and breadcrumbs),
 * - TODO: access (user access),
 * - icon (display in sidebar), (maybe used in the future)
 * - component (react component to be display)
 * - childrens (the paths that start with this name, like :id or history/:id in aisles)
 *
 * Every children have the same attributes,
 * - IF don't have component is not a path,
 * ex: routes[/aisles][history] is not a path but routes[/aisles][/history][/:id] it is
 * - IF don't have the name it is use the actual path,
 * ex: the :id is replace with the number in the actual path.
 * - IF don't have access it is use the parent access.
*/
const routes = {
  '/noticias': {
    navbar: 'Noticias',
    component: Noticias,
  },
  '/calendario': {
    navbar: 'Calendario',
    component: Calendar,
  },
  '/asambleas': {
    navbar: 'Asambleas',
  },
  '/malla': {
    navbar: 'Malla',
    component: Malla,
  },
  '/tomaderamos': {
    navbar: 'Toma de ramos',
  },
  '/documentos': {
    navbar: 'Documentos',
  },
  '/foro': {
    navbar: 'Foro',
  },
}

/**
 * Function that convert the routes object to a list
 */
export const getRoutes = () => {
  // function with the info of the parent path
  const getChildrenRoutes = (parentPath = '', parentAccess = 1) => {
    // return a function used in the reducer with parent values
    const reducerIteration = (reducer, [key, values]) => {
      const { component, childrens, access } = values;
      let routesList = [...reducer]; // list with all the paths objects
      const actualPath = `${parentPath}${key}`;
      const actualAccess = access || parentAccess; // check the access
      // if has childrens get their routes
      if (childrens) {
        const childrensEntries = Object.entries(childrens);
        routesList = childrensEntries.reduce(
          getChildrenRoutes(actualPath, actualAccess),
          routesList,
        );
      }
      // if has component atribute add this object to the routes
      if (component) {
        const pathStructure = {
          path: actualPath,
          component,
          access: actualAccess,
        };
        routesList = [...routesList, pathStructure]; // add the parent
      }
      return routesList;
    };
    return reducerIteration;
  };

  const routesEntries = Object.entries(routes);
  const routesList = routesEntries.reduce(getChildrenRoutes(), []);
  return routesList;
};

export const getSidebatPaths = () => {
  const routesEntries = Object.entries(routes);
  return routesEntries.map(([path, values]) => ({
    ...values,
    path,
  }));
};

export default routes;
