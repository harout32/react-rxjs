import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "../styles/Themes";
import { GlobalStyles } from '../styles/GlobalStyles';


export const RenderHelper = (children: React.ReactNode) => render(
    <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);