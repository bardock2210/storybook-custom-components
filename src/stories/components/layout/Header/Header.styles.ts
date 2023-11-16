import { SxProps, Theme, alpha } from "@mui/material";

export const headerContainer: SxProps<Theme> = {
  backgroundColor: (theme) => alpha(theme.palette.primary.light, 0.8),
  flexGrow: 1,
  position: "sticky",
  top: 0,
  zIndex: (theme) => theme.zIndex.appBar,
};

export const appBarStyles: SxProps = {
  boxShadow: "none",
};

export const logoContainerSx: SxProps = {
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  "& .MuiTypography-root": {
    paddingLeft: "5px",
  },
};

export const logoStyles: SxProps = {
  display: { xs: "none", sm: "block" },
  WebkitUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
};

