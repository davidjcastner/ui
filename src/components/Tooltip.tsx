import type { FC } from 'react';
import React from 'react';

/**
 * display a description below the element when hovered over
 *
 * Tooltip should be a child element of the intended target
 */
export const Tooltip: FC<{
    text?: string;
}> = ({ text, children }) => <div className='ui-tooltip'>
    {
        text
            ? <p>
                {text}
            </p>
            : children
    }
</div>;
