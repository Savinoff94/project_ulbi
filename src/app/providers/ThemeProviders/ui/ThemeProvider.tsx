import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from 'app/providers/ThemeProviders/lib/ThemeContext';
import {
    FC, ReactElement, ReactNode, useMemo, useState,
} from 'react';
import { Theme } from '../lib/ThemeContext';

const defaulTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider : FC = ({ children } : ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaulTheme);

    const defaultProps = useMemo(() => (
        {
            theme,
            setTheme,
        }
    ), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
