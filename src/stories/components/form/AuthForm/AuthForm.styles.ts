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
    margin: "auto",
    maxWidth: 550,
    padding: theme.spacing(6, 4, 4),
    [theme.breakpoints.down("sm")]: {
      border: "none",
      boxShadow: "none",
      margin: "0px",
      padding: theme.spacing(3),
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
