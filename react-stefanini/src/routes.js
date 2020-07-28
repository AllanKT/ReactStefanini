import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RoutesPrivate from './component/Private/Private';
import StoreProvider from './component/Store/Provider';

import Home from './view/Home';
import List from './view/List';

export default function Routes() {
    return (
        <BrowserRouter>
            <StoreProvider>
                <Switch>
                    <Route path="/" exact component={Home} />

                    <RoutesPrivate path="/list" component={List}/>
                </Switch>
            </StoreProvider>
        </BrowserRouter>
    );
}