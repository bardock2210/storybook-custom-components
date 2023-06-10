import { FC, MouseEvent, useState } from "react";
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import {
  AccountCircle,
  MoreVert,
  NotificationsNoneOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { MobileMenu } from "@/components/display/MobileMenu/MobileMenu";
import { headerContainer, headerStyles, iconContainer, logoStyles } from "./headerStyles";

export interface HeaderProps {
  cartMenuHandler: () => void;
  cartTotalElements: number;
  notificationMenuHandler: () => void;
  notificationTotal: number;
  profileMenuHandler: () => void;
}

export const Header: FC<HeaderProps> = ({
  cartMenuHandler,
  cartTotalElements,
  notificationMenuHandler,
  notificationTotal,
  profileMenuHandler,
}) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <Box sx={headerContainer}>
      <AppBar position="static" sx={headerStyles}>
        <Toolbar>
          <Typography component="div" noWrap sx={logoStyles} variant="h6">
            ZipCode Services
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={iconContainer}>
            <IconButton color="inherit" onClick={cartMenuHandler} size="large">
              <Badge badgeContent={cartTotalElements} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={notificationMenuHandler} size="large">
              <Badge badgeContent={notificationTotal} color="error">
                <NotificationsNoneOutlined />
              </Badge>
            </IconButton>
            <IconButton color="inherit" edge="end" onClick={profileMenuHandler} size="large">
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-haspopup="true"
              color="inherit"
              onClick={handleMobileMenuOpen}
              size="large"
            >
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {
        <MobileMenu
          anchorEl={mobileMoreAnchorEl}
          cartMenuHandler={cartMenuHandler}
          cartTotalElements={cartTotalElements}
          notificationMenuHandler={notificationMenuHandler}
          notificationTotal={notificationTotal}
          onClose={handleMobileMenuClose}
          open={Boolean(mobileMoreAnchorEl)}
          profileMenuHandler={profileMenuHandler}
        />
      }
    </Box>
  );
};
