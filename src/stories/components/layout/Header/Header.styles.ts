import { SxProps, Theme } from "@mui/material";
import { SIDE_NAV_WIDTH } from "@/types/constants";

export const getAppBarStyles = (hasSideNav: boolean): SxProps<Theme> => {
  return {
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(249, 250, 251, 0.8)",
    boxShadow: "none",
    ...(hasSideNav && {
      width: {
        lg: `calc(100% - ${SIDE_NAV_WIDTH})`,
      },
      ml: { lg: SIDE_NAV_WIDTH },
    }),
  };
};

export const logoContainerSx: SxProps<Theme> = {
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  "& .MuiTypography-root": {
    paddingLeft: "5px",
  },
};

export const logoStyles: SxProps<Theme> = {
  display: { xs: "none", sm: "block" },
  WebkitUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
};
