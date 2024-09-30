import { AuthLayout, NotAuthLayout, RootLayout } from '@/layouts';
import { About, Contact, DashBoard, Home, Login, NotFound, Register, Users } from '@/pages';
import { AuthenticatedErrorBoundary, RootErrorBoundary } from '@/utils';
import { createBrowserRouter } from 'react-router-dom';

/** *************> createBrowserRouter
 * @remarks
 * This method is used to create a BrowserRouter using the routes configuration
 * /!\ Do not confuse with BrowserRouter which is a component that does not have access to the data API
 *
 * @param routes - Routes configuration
 * @param options - Options for the BrowserRouter
 *
 * @see {@link https://reactrouter.com/en/main/routers/create-browser-router}
 */

/** *************> routes
 * Routes configuration for the React App
 * Available parameters :
 * - path: string. Required. Path for the route
 * - element : React Component. Required. Component to render into the route (layout or page as children)
 * - errorElement : React Component. Required. Component to render into the route if an error occurs
 * - loader : Function. Optional. Function required when loading the component lazily
 * - lazy : Function. Optional. Function to load the component lazily
 * - children : Array. Optional. Array of routes to render into the route
 *
 *  @remarks
 *  Ensure your component has a loader for lazy loading to prevent crashing
 *  You can handle it here passing a loader function or in the component itself
 *
 *  @see {@link https://reactrouter.com/en/main/routers/create-browser-router#routes}
 */

const notAuthRoutes = [
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'forgot-password',
    element: <Login />,
  },
];

const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'About',
    element: <About />,
  },
  {
    element: <NotAuthLayout />,
    children: notAuthRoutes,
  },
];

const authRoutes = [
  {
    path: 'dashboard',
    element: <DashBoard />,
  },
  {
    path: 'users',
    element: <Users />,
  },
];

export const routes = [
  {
    path: '/',
    errorElement: <RootErrorBoundary />,
    children: [
      {
        element: <RootLayout />,
        children: publicRoutes,
      },
      {
        element: <AuthLayout />,
        errorElement: <AuthenticatedErrorBoundary />,
        children: authRoutes,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});

export default router;
