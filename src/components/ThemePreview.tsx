import type { FC } from 'react';
import React from 'react';
import { useTheme } from '../context/theme';


/**
 * displays the current theme
 * and allows the user to change theme colors
 */
export const ThemePreview: FC = () => {
    const {} = useTheme();
    return <div />;
};
