import { CssBaseline } from "@mui/material";
import { ZipCodeInfoProvider } from "../src/stories/context/ZipCodeInfo";
import { NotificationBar } from "../src/stories/components/display/NotificationBar/NotificationBar";
import { createTheme } from "../src/stories/theme";

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
    <ZipCodeInfoProvider theme={theme}>
      <CssBaseline />
      <Story />
      <NotificationBar />
    </ZipCodeInfoProvider>
  ),
];
