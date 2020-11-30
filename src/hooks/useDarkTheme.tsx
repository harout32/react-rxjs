import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const DarkModeStateContext = createContext<any>(() => window.localStorage.getItem('theme') || 'light');
const DarkModeTogglerContext = createContext<any>(() => '');
type DarkModeProviderProps = { children: React.ReactNode };
export function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [theme, setTheme] = useState(() => window.localStorage.getItem('theme') || 'light');

    const themeToggler = useCallback(() => {
        setTheme((prev) => {
            const theme = prev === 'light' ? 'dark' : 'light';
            window.localStorage.setItem('theme', theme);
            return theme;
        });
    }, [setTheme]);

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, []);

    return (
        <DarkModeStateContext.Provider value={theme}>
            <DarkModeTogglerContext.Provider value={themeToggler}>
                {children}
            </DarkModeTogglerContext.Provider>
        </DarkModeStateContext.Provider>
    );
}

export function useDarkModeState(): any {
    const context = useContext(DarkModeStateContext);
    if (context === undefined) {
        throw new Error('useDarkModeState must be used within a DarkModeProvider');
    }
    return context;
}
export function useDarkModeToggler() {
    const context = useContext(DarkModeTogglerContext);
    if (context === undefined) {
        throw new Error('useDarkModeToggler must be used within a DarkModeProvider');
    }
    return context;
}
