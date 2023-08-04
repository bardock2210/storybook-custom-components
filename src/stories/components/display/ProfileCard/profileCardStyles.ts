import { Avatar, Card, Typography, styled } from "@mui/material";

export const ProfileCardContainer = styled(Card)(({ theme }) => ({
  border: "1px solid #CCCCCC",
  boxShadow: "none",
  margin: "auto",
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    marginTop: "20px",
  },
}));

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  margin: "auto",
  marginBottom: theme.spacing(2),
}));

export const ProfileInfoElement = styled(Typography)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  fontSize: "14px",
  gap: "5px",
}));
