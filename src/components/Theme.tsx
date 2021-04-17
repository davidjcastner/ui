import type { FunctionComponent } from 'react';
import React from 'react';

/** provides a set of colors for all components */
export const Theme: FunctionComponent<{
    colors: {
        base: ThemeColor;
        main: ThemeColor;
        accent: ThemeColor;
        valid: ThemeColor;
        error: ThemeColor;
        highlight: ThemeColor;
    };
}> = () => <div>home page</div>;
