import type { FC } from 'react';
import React from 'react';

/**
 * renders an icon
 */
export const Nav: FC<{ title?: JSX.Element }> = ({ title, children }) => <nav>
    {children}
</nav>;
