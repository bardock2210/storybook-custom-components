import { Theme, ThemeOptions, alpha } from "@mui/material/styles";
import { palette } from "./palette";
import { CustomPalette } from "../types";

const color = palette.grey[500];

export interface CustomThemeOptions extends Theme {
  customShadows?: {
    z1: string;
    z4: string;
    z8: string;
    z12: string;
    z16: string;
    z20: string;
    z24: string;
    primary: string;
    info: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    card: string;
    dialog: string;
    dropdown: string;
  };
  customValues: Record<string, any>;
  palette: CustomPalette;
}

export const customShadows = () => {
  const transparent = alpha(color, 0.16);

  return {
    z1: `0 1px 2px 0 ${transparent}`,
    z4: `0 4px 8px 0 ${transparent}`,
    z8: `0 8px 16px 0 ${transparent}`,
    z12: `0 12px 24px -4px ${transparent}`,
    z16: `0 16px 32px -4px ${transparent}`,
    z20: `0 20px 40px -4px ${transparent}`,
    z24: `0 24px 48px 0 ${transparent}`,
    primary: `0 8px 16px 0 ${alpha(palette.primary.main, 0.24)}`,
    // info: `0 8px 16px 0 ${alpha(palette.info.main, 0.24)}`,
    secondary: `0 8px 16px 0 ${alpha(palette.secondary.main, 0.24)}`,
    // success: `0 8px 16px 0 ${alpha(palette.success.main, 0.24)}`,
    warning: `0 8px 16px 0 ${alpha(palette.warning.main, 0.24)}`,
    error: `0 8px 16px 0 ${alpha(palette.error.main, 0.24)}`,
    card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(color, 0.12)}`,
    dialog: `-40px 40px 80px -8px ${alpha(color, 0.24)}`,
    dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(color, 0.24)}`,
  };
};
