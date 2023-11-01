import { FC } from "react";
import { Card, CardActionArea, CardContent, type CardProps, Typography } from "@mui/material";
import Iconify from "@/components/display/Iconify";
import { StyledIcon, getCardSx, getIconSx } from "./navigationCardStyles";
import type { SxProps } from "@mui/material";
import type { IconifyIcon } from "@iconify/react";

export interface NavigationCardProps extends CardProps {
  color: "primary" | "secondary" | "info" | "warning" | "error";
  icon: string | IconifyIcon;
  onClickHandler: () => void;
  sx?: SxProps;
  title: string;
  total?: number;
}

export const NavigationCard: FC<NavigationCardProps> = ({
  color = "primary",
  icon,
  onClickHandler,
  sx,
  title,
  total,
  ...other
}) => {
  const cardSx = [...(Array.isArray(sx) ? sx : [sx]), { ...getCardSx(color) }];
  const iconSx = [{ ...getIconSx(color) }];

  return (
    <Card {...other} onClick={onClickHandler} sx={cardSx}>
      <CardActionArea>
        <CardContent>
          <StyledIcon sx={iconSx}>
            <Iconify icon={icon} width={24} height={24} />
          </StyledIcon>
          <Typography variant="h3">{total}</Typography>
          <Typography variant="h4" sx={{ opacity: 0.72 }}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
