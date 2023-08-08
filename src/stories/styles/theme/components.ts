import { paperClasses } from "@mui/material";
import { ComponentOverrides, CreateComponentsConfig } from "@/types/theme";

export const createComponents = (config: CreateComponentsConfig): ComponentOverrides => {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          [`&.${paperClasses.elevation1}`]: {
            boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
          "&:last-child": {
            paddingBottom: "24px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
  };
};
