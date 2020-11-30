import React, { memo } from "react"
import { ThemeProvider } from "styled-components"
import { useDarkModeState } from "../hooks/useDarkTheme"
import { HomePage } from "../pages/HomePage"
import { GlobalStyles } from "../styles/GlobalStyles"
import { darkTheme, lightTheme } from "../styles/Themes"


export const MainPage = memo(() => {
    const theme = useDarkModeState();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <HomePage />
        </ThemeProvider>
    )
});