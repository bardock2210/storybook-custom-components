import { alpha, styled, type SxProps, type Theme } from "@mui/material";

type Color = "primary" | "secondary" | "info" | "warning" | "error";

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

export const getCardSx = (color: Color): SxProps<Theme> => ({
  backgroundColor: (theme: any) => theme.palette[color].light,
  borderRadius: "8px",
  color: (theme: any) => theme.palette[color].dark,
  textAlign: "center",
});

export const getIconSx = (color: Color) => ({
  color: (theme: any) => theme.palette[color].dark,
  backgroundImage: (theme: any) =>
    `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
      theme.palette[color].dark,
      0.24
    )} 100%)`,
});
