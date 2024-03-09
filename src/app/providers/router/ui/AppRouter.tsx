import React, {
    Suspense, memo, useCallback, useMemo,
} from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader/PageLoader';

import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    // const isAuth = useSelector(getUserAuthData);

    // const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    //     if (route.authOnly && !isAuth) {
    //         return false;
    //     }

    //     return true;
    // }), [isAuth]);

    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />

        );
    }, []);

    return (

        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
