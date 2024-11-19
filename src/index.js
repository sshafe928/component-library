import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfilePage from './components/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <ProfilePage/> },
  // { path: '/test', element: <Test /> },
  // Add more routes here
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

