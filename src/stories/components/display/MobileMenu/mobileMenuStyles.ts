import { SxProps } from "@mui/material";

export const menuSx: SxProps = {
  "& .MuiPaper-root": {
    borderRadius: 0.75,
  },
  "& .MuiList-root": {
    p: 0,
    m: 1.5,
  },
};

export const menuItemSx: SxProps = {
  borderRadius: "4.5px",
  height: "40px",
  paddingLeft: 0,
  typography: "body2",
  "& .MuiBadge-badge": {
    fontSize: "0.6rem",
    height: "13px",
    minWidth: "13px",
    padding: "5px 0 6px",
    width: "13px",
  },
};
