import { createTheme as createMuiTheme } from "@mui/material";
import { palette } from "@/styles/theme";
import { createComponents } from "./components";

export const createTheme = () => {
  const components = createComponents({ palette });

  return createMuiTheme({
    components,
    palette,
  });
};
