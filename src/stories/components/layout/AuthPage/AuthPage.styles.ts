import { Box, Container } from "@mui/material";
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

export const ChildrenContainer = styled(Container)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: { paddingLeft: 0, paddingRight: 0 },
  minHeight: "100vh",
}));
