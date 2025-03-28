import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';

import NotFound from './pages/NotFound';
import Movies from './pages/Movies';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: 'movie/:keyword',
        element: <Movies />,
      },
      {
        path: 'movie/watch/:movieId',
        element: <MovieDetail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
