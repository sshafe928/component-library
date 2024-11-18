import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import Profile from './components/Profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Profile profileImage="https://cloudinary.com/150" firstName="John" lastName="Doe" email="johndoe@example.com" socialLinks={{ github: "https://github.com/johndoe", instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe" }} /> },
  // { path: '/test', element: <Test /> },
  // Add more routes here
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

