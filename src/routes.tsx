import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadingScreen from './components/loading-screen';
import MainLayout from './layouts/main';
const HomePage = lazy(() => import('./containers/home'));

const Routes = () => {
    return (
        <MainLayout>
            <Suspense fallback={<LoadingScreen />}>
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                </Switch>
            </Suspense>
        </MainLayout>
    );
}

export default Routes;