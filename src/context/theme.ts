import type { ThemeContext } from '../types/ThemeContext';
import { createContext, useContext } from 'react';

/** default values for theme context */
export const initialTheme: ThemeContext = {};

/** react context wrapper for theme */
export const ThemeCtx = createContext<ThemeContext>(initialTheme);

/** provides theme context to all children in Theme component */
export const useTheme = (): ThemeContext => useContext(ThemeCtx);
