import type { FC } from 'react';
import React from 'react';

/**
 * renders an icon
 */
export const Icon: FC<{ name: string }> = ({ name }) => <i
    className='ui-icon material-icons material-icons-outlined'>
    {name}
</i>;
