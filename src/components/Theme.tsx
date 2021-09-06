import type { FC } from 'react';
import type { ThemeContext } from '../types/ThemeContext';
import React, { useState } from 'react';
import { initialTheme, ThemeCtx } from '../context/theme';


/** provides a set of colors for all components */
export const Theme: FC<{
    // colors: {
    //     base: ThemeColor;
    //     main: ThemeColor;
    //     accents: Array<ThemeColor>;
    //     valid: ThemeColor;
    //     error: ThemeColor;
    //     highlight: ThemeColor;
    // };
}> = ({ children }) => {
    const [state, setState] = useState<ThemeContext>(initialTheme);
    // TODO: add actions for theme changes
    return <ThemeCtx.Provider value={state}>
        {children}
    </ThemeCtx.Provider>;
};
