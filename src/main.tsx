import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{ path: '*', element: <NotFound /> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
