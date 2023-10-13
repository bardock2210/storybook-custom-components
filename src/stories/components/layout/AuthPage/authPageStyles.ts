import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const SideBarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: theme.shadows[10],
  backgroundColor: theme.palette.background.default,
  "& .MuiTypography-root": {
    marginTop: "5rem",
    marginBottom: "2.5rem",
    padding: "0 2.5rem",
  },
}));
