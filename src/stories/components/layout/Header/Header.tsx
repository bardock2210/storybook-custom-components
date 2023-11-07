// vendors
import { useState, type FC, type MouseEvent } from "react";
import { AppBar, Badge, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

// components
import { MobileMenu, MenuOptionsProps } from "@/components/display/MobileMenu/MobileMenu";

// styles
import {
  headerContainer,
  headerStyles,
  iconContainer,
  logoContainerSx,
  logoStyles,
} from "./Header.styles";

export interface HeaderProps {
  logo: JSX.Element;
  menuOptions: MenuOptionsProps[];
  onClickLogoHandler: () => void;
  user: {
    name: string;
    email: string;
  };
}

export const Header: FC<HeaderProps> = ({ logo, menuOptions, onClickLogoHandler, user }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <Box sx={headerContainer}>
      <AppBar color="primary" position="static" sx={headerStyles}>
        <Toolbar>
          <Box component="div" onClick={onClickLogoHandler} sx={logoContainerSx}>
            {logo}
            <Typography component="div" noWrap sx={logoStyles} variant="h6">
              ZipCode Services
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={iconContainer}>
            {menuOptions.map(
              ({ badgeContent, icon, hasSubMenu, isIconButton, message, onClickHandler }, index) =>
                isIconButton && (
                  <Tooltip key={`icon-button-${index}`} title={message}>
                    <IconButton
                      color="inherit"
                      onClick={(e) => (hasSubMenu ? handleMenuOpen(e) : onClickHandler(e))}
                      size="large"
                    >
                      <Badge badgeContent={badgeContent} color="error">
                        {icon}
                      </Badge>
                    </IconButton>
                  </Tooltip>
                )
            )}
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
          menuOptions={menuOptions.filter((option) => !option.hasSubMenu)}
          onClose={handleMobileMenuClose}
          open={Boolean(mobileMoreAnchorEl)}
          setAnchorEl={setMobileMoreAnchorEl}
          user={{ email: user.email, name: user.name }}
        />
      }
      {
        <MobileMenu
          anchorEl={anchorEl}
          menuOptions={menuOptions.filter((option) => !option.isIconButton)}
          onClose={handleMenuClose}
          open={Boolean(anchorEl)}
          setAnchorEl={setAnchorEl}
          user={{ email: user.email, name: user.name }}
        />
      }
    </Box>
  );
};
