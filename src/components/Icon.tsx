import type { FunctionComponent } from 'react';
import React from 'react';

/**
 * renders an icon
 */
export const Icon: FunctionComponent<{ name: string }> = ({ name }) => <i
    className='ui-icon material-icons material-icons-outlined'>
    {name}
</i>;
