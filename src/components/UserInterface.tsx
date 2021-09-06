import type { FC } from 'react';
import React, { useEffect } from 'react';

/**
 * adds global styles to all elements in the body
 * by add the 'ui' class to the body element
 */
export const UserInterface: FC = ({ children }) => {
    useEffect(() => {
        document.body.classList.add('ui');
        return (): void => {
            document.body.classList.remove('ui');
        };
    }, []);
    return <>
        {children}
    </>;
};
