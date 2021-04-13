import type { FunctionComponent } from 'react';
import React from 'react';

/**
 * display a description below the element when hovered over
 *
 * Tooltip should be a child element of the intended target
 */
export const Tooltip: FunctionComponent<{
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
