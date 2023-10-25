import { CssBaseline, ThemeProvider } from "@mui/material";
// import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { ComponentsProvider } from "../src/stories/context/Components";
import { createTheme } from "../src/stories/styles";

const theme = createTheme();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ComponentsProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ComponentsProvider>
  ),
  // withThemeFromJSXProvider({
  //   themes: {
  //     light: theme,
  //   },
  //   defaultTheme: "light",
  //   Provider: ThemeProvider,
  //   GlobalStyles: CssBaseline,
  // }),
];
