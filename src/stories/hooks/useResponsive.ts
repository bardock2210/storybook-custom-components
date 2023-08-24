// @mui
import { type Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type Query = "up" | "down" | "between";

export const useResponsive = (query: Query, start: Breakpoint, end?: Breakpoint) => {
  const theme = useTheme();
  const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between" && end) {
    return useMediaQuery(theme.breakpoints.between(start, end));
  }

  return mediaOnly;
};
