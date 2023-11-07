import { Avatar, styled, Typography } from "@mui/material";

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  marginBottom: theme.spacing(2),
}));

export const ProfileInfoElement = styled(Typography)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  fontSize: "14px",
  gap: "5px",
}));
