import { SxProps, Theme } from "@mui/material";

const SIDE_NAV_WIDTH = 280;

// export const HeaderContainer = styled(Box)(({ theme }: any) => ({
//   backgroundColor: alpha(theme.palette.primary.light, 0.8),
//   flexGrow: 1,
//   position: "sticky",
//   top: 0,
//   zIndex: theme.zIndex.appBar,
//   [theme.breakpoints.up("lg")]: {
//     left: `${SIDE_NAV_WIDTH}px`,
//     width: `calc(100% - ${SIDE_NAV_WIDTH + 1}px)`,
//   },
// }));

export const appBarStyles: SxProps<Theme> = {
  boxShadow: "none",
  width: { lg: `calc(100% - ${SIDE_NAV_WIDTH}px)` },
  ml: { lg: `${SIDE_NAV_WIDTH}px` },
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
