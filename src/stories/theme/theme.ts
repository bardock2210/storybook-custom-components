import { createTheme as createMuiTheme } from "@mui/material";
import {
  CustomThemeOptions,
  customShadows,
  customValues,
  palette,
  shadows,
  typography,
} from "@/theme/index";
import { createComponents } from "./components";

export const createTheme = () => {
  const components = createComponents({ palette });

  return createMuiTheme({
    components,
    customShadows: customShadows(),
    customValues,
    palette,
    shadows: shadows(),
    typography,
  } as unknown as CustomThemeOptions);
};
