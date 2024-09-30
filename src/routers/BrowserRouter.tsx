import { AuthLayout, RootLayout } from '@/layouts';
import { Contact, DashBoard, Home, Login, NotFound, Users } from '@/pages';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="*" element={<NotFound />} />;
    </Route>,
  ),
);

export default router;
