// vendors
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AuthFormContainer = styled(Card)(({ theme }) => {
  return {
    alignItems: "center",
    borderRadius: "0.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    justifyContent: "center",
    maxWidth: 550,
    [theme.breakpoints.up("sm")]: {
      margin: "auto",
      padding: theme.spacing(6, 4, 4),
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0px",
      padding: theme.spacing(2, 2, 2),
    },
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
  };
});
