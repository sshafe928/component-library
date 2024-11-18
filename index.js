import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import Profile from './pages/Profile';
import Test from './pages/test';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Profile /> },
  { path: '/test', element: <Test /> },
  // Add more routes here
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

