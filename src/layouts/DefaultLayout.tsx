import type { FC } from 'react';
import React from 'react';

/** */
export const DefaultLayout: FC = ({ children }) => <div
    className='ui-layout-default'>
    {children}
</div>;
