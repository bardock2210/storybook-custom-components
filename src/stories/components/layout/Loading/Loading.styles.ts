// types
import type { SxProps, Theme } from "@mui/material";

export const loadingSx: SxProps<Theme> = {
  color: "#FFFFFF",
  zIndex: (theme) => theme.zIndex.drawer + 1,
};
