import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfilePage from './components/Profile';
import FooterPage from './components/Footer_Minimalist';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainNav from './pages/main';

const router = createBrowserRouter([
  { path: '/', element: <MainNav/> },
  { path: '/footer', element: <FooterPage /> },
  { path: '/profile-card', element:<ProfilePage/> },
  // Add more routes here
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

