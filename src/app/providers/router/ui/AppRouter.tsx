import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {
                Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                        key={path}
                        path={path}
                    />
                ))
            }
        </Routes>
    </Suspense>
);

export default AppRouter;
