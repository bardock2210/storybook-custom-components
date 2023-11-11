import { Color, Palette } from "@mui/material";

export interface CustomPaletteColorOptions {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface CustomPalette extends Palette {
  error: CustomPaletteColorOptions;
  grey: Color;
  indigo: CustomPaletteColorOptions;
  primary: CustomPaletteColorOptions;
  secondary: CustomPaletteColorOptions;
  warning: CustomPaletteColorOptions;
  white: CustomPaletteColorOptions;
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
