import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  "& .MuiLink-root": {
    cursor: "pointer",
  },
}));
