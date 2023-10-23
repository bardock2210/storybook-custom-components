import { FC } from "react";
import { alpha, Card, Typography, CardActionArea, CardContent } from "@mui/material";
import Iconify from "@/components/display/Iconify";
import { StyledIcon } from "./navigationCardStyles";
import type { SxProps } from "@mui/material";
import type { IconifyIcon } from "@iconify/react";

export interface NavigationCardProps {
  title: string;
  total?: number;
  icon: string | IconifyIcon;
  color: "primary" | "secondary" | "info" | "warning" | "error";
  sx?: SxProps;
}

export const NavigationCard: FC<NavigationCardProps> = ({
  title,
  total,
  icon,
  color = "primary",
  sx,
  ...other
}) => {
  return (
    <Card
      sx={{
        backgroundColor: (theme: any) => theme.palette[color].light,
        borderRadius: "8px",
        color: (theme: any) => theme.palette[color].dark,
        textAlign: "center",
        ...sx,
      }}
      {...other}
    >
      <CardActionArea>
        <CardContent>
          <StyledIcon
            sx={{
              color: (theme: any) => theme.palette[color].dark,
              backgroundImage: (theme: any) =>
                `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                  theme.palette[color].dark,
                  0.24
                )} 100%)`,
            }}
          >
            <Iconify icon={icon} width={24} height={24} />
          </StyledIcon>
          <Typography variant="h3">{total}</Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
