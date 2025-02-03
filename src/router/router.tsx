import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';
const Router: React.FunctionComponent = () => {
	return (
		<>
		<Routes>
					{routes.map((route, index) => (
						<Route
							key={`public-${index}`}
							path={route.route}
							element={route.element}
						/>
					))}
			</Routes>
		</>
	);
};

export default Router;
