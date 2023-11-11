// vendors
import { FC } from "react";
import { Card, CardActionArea, CardContent, Typography, type CardProps } from "@mui/material";

// components
import Iconify from "@/components/display/Iconify";

// types
import type { SxProps } from "@mui/material";
import type { IconifyIcon } from "@iconify/react";

// styles
import { CustomColor, StyledIcon, getCardSx, getIconSx } from "./NavigationCard.styles";

export interface NavigationCardProps extends CardProps {
  color?: CustomColor;
  icon: string | IconifyIcon;
  onClickHandler: () => void;
  sx?: SxProps;
  title: string;
  total?: number;
}

export const NavigationCard: FC<NavigationCardProps> = ({
  color = "white",
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
