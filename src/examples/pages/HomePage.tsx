import type { FC } from 'react';
import React from 'react';
import NavExample from '../NavExample';
import {
    DefaultLayout,
    ThemePreview,
} from '../../index';


/** home page will have the theme previewer */
export const HomePage: FC = () => <DefaultLayout>
    <NavExample />
    <section>
        <ThemePreview />
    </section>
</DefaultLayout>;
