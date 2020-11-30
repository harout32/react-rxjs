import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";

import { darkTheme, lightTheme } from "../src/styles/Themes";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [darkTheme, lightTheme]));
