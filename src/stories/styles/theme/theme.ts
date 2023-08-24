import { createTheme as createMuiTheme } from "@mui/material";
import { CustomThemeOptions, customShadows, palette, shadows, typography } from "@/styles/theme";
import { createComponents } from "./components";

export const createTheme = () => {
  const components = createComponents({ palette });

  return createMuiTheme({
    components,
    // customShadows: customShadows(),
    palette,
    shadows: shadows(),
    typography,
  } as CustomThemeOptions);
};
