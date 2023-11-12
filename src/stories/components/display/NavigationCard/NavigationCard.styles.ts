import { alpha, styled, type SxProps, type Theme } from "@mui/material";

export type CustomColor =
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "error"
  | "indigo"
  | "white";

export const StyledIcon = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

export const getCardSx = (color: CustomColor): SxProps<Theme> => ({
  backgroundColor: (theme: any) => theme.palette[color].light,
  borderRadius: "0.25rem",
  color: (theme: any) => theme.palette[color].dark,
  textAlign: "center",
});

export const getIconSx = (color: CustomColor) => ({
  color: (theme: any) => theme.palette[color].dark,
  backgroundImage: (theme: any) =>
    `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
      theme.palette[color].dark,
      0.24
    )} 100%)`,
});
