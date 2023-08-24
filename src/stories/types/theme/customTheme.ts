import { Color, Palette } from "@mui/material";

export interface CustomPaletteColorOptions {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface CustomPalette extends Palette {
  primary: CustomPaletteColorOptions;
  secondary: CustomPaletteColorOptions;
  error: CustomPaletteColorOptions;
  warning: CustomPaletteColorOptions;
  grey: Color;
}

export interface CreateComponentsConfig {
  palette: CustomPalette;
}

export interface ComponentOverrides {
  [component: string]: {
    styleOverrides?: Record<string, any>;
    defaultProps?: Record<string, any>;
  };
}
