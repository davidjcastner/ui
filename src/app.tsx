// wraps the library for easy display in a web browser

import type { FC } from 'react';
import type { RouteDefinition } from '@davidjcastner/router';
import React from 'react';
import { render } from 'react-dom';
import {
    RoutePage,
    RouteRegistry,
} from '@davidjcastner/router';

// library components
import { Theme } from './index';

// import all pages
import { HomePage } from './examples/pages/HomePage';

// all route definitions
export enum RouteName {
    HOME = 'home'
}
const routes: Array<RouteDefinition> = [
    {
        route: RouteName.HOME,
        component: HomePage,
        path: [],
        isPublic: true,
    },
];

// App - root Component
const App: FC = () => <Theme>
    <RouteRegistry routes={routes}>
        <RoutePage notFound={HomePage} />
    </RouteRegistry>
</Theme>;

// construct a div for react to hook onto
const reactTarget = document.createElement('div');
reactTarget.setAttribute('id', 'react-target');
document.body.appendChild(reactTarget);

// render example components
render(<App />, reactTarget);
