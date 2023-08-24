import { CreateComponentsConfig, CustomPalette } from "@/types/theme";
import { Color } from "@mui/material";

const GREY: Color = {
  50: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  A100: "",
  A200: "",
  A400: "",
  A700: "",
};

export const palette: CreateComponentsConfig["palette"] = {
  primary: {
    contrastText: "#FFFFFF",
    dark: "#002C3D",
    light: "#0074A3",
    main: "#005070",
  },
  secondary: {
    contrastText: "#FFFFFF",
    dark: "#42647F",
    light: "#AEC4D5",
    main: "#6E95B4",
  },
  error: {
    contrastText: "#FFFFFF",
    dark: "#911D1E",
    light: "#D93B3E",
    main: "#BC2527",
  },
  warning: {
    contrastText: "#FFFFFF",
    dark: "#DD7500",
    light: "#FFCA8E",
    main: "#FFA036",
  },
  grey: GREY,
} as CustomPalette;
