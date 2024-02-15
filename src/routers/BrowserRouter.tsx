import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthLayout, RootLayout } from '@/layouts';
import { Home, Contact, Login, DashBoard, Users, NotFound } from '@/pages';

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
