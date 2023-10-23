import { ComponentType } from "react";
import { ThemeProvider } from "@mui/material";
import { NotificationBarProvider } from "@/context/Components";
import { createTheme } from "./stories/styles";

const theme = createTheme();

const withThemeProvider = <Props extends {}>(Component: ComponentType<Props>) => {
  return (props: Props) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
};

export default withThemeProvider;
