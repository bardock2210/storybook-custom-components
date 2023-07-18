import { SxProps } from "@mui/material";

export const headerContainer: SxProps = {
  flexGrow: 1,
};

export const headerStyles: SxProps = {
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

export const iconContainer: SxProps = {
  display: {
    xs: "none",
    md: "flex",
  },
};
