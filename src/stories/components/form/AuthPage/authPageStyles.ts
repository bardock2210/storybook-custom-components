import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  "& .MuiLink-root": {
    cursor: "pointer",
  },
  "& .MuiStack-root": {
    margin: "0.5rem 0",
    width: "100%",
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

export const AuthFormContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  padding: theme.spacing(12, 0),
  "& .MuiAvatar-root": {
    backgroundColor: theme.palette.info.main,
    height: 56,
    margin: "0.5rem",
    width: 56,
  },
  "& .MuiBox-root": {
    width: "100%",
  },
}));
