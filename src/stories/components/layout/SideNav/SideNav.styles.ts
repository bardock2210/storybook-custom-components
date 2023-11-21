// vendors
import { alpha, type SxProps, type Theme } from "@mui/material";

// consts
import { SIDE_NAV_WIDTH } from "@/types/constants";

export const sideNavPaperSx: SxProps<Theme> = {
  backgroundColor: (theme) => theme.palette.primary.dark,
  border: "none",
  boxShadow: "none",
  color: "common.white",
  overflow: "hidden",
  width: SIDE_NAV_WIDTH,
};

export const sideNavSx: SxProps<Theme> = {
  boxSizing: "border-box",
  width: SIDE_NAV_WIDTH,
  zIndex: (theme) => theme.zIndex.appBar + 100,
  "& .SideNav-header-container": {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: [3, 2],
    "& .SideNav-header-logo": {
      cursor: "pointer",
      display: "inline-flex",
      "& .MuiTypography-root": {
        paddingLeft: "5px",
      },
    },
  },
  "& .MuiDivider-root": {
    borderColor: "neutral.700",
  },
  "& nav": {
    flexGrow: 1,
    padding: [3, 2],
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "5px !important",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#555",
      borderRadius: "10px",
    },
    "& ul": {
      listStyle: "none",
      p: 0,
      m: 0,
    },
  },
};

export const getSideNavItemSx = (active?: boolean): SxProps<Theme> => {
  return {
    alignItems: "center",
    borderRadius: 1,
    display: "flex",
    justifyContent: "flex-start",
    pl: "16px",
    pr: "16px",
    py: "6px",
    textAlign: "left",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.04)",
    },
    ...(active && { backgroundColor: "rgba(255, 255, 255, 0.04)" }),
  };
};

export const getSideNavItemIconSx = (active?: boolean): SxProps<Theme> => {
  return {
    mr: 2,
    ...(active && {
      color: "primary.main",
    }),
  };
};

export const getSideNavItemTextSx = (active?: boolean, disabled?: boolean): SxProps<Theme> => {
  return {
    color: "neutral.400",
    flexGrow: 1,
    fontFamily: (theme) => theme.typography.fontFamily,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "24px",
    whiteSpace: "nowrap",
    ...(active && {
      color: "common.white",
    }),
    ...(disabled && {
      color: "neutral.500",
    }),
  };
};

export const userCardSx: SxProps<Theme> = {
  alignItems: "center",
  backgroundColor: (theme) => alpha(theme.palette.grey[500], 0.12),
  borderRadius: "0.25rem",
  display: "flex",
  padding: (theme) => theme.spacing(2, 2.5),
  width: "-webkit-fill-available",
  "& .MuiBox-root": {
    ml: 2,
    mr: 2,
    overflow: "hidden",
  },
};
