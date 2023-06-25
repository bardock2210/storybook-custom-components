import { FC, MouseEvent, useState } from "react";
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { MobileMenu, MenuOptionsProps } from "@/components/display/MobileMenu/MobileMenu";
import { headerContainer, headerStyles, iconContainer, logoStyles } from "./headerStyles";

export interface HeaderProps {
  menuOptions: MenuOptionsProps[];
}

export const Header: FC<HeaderProps> = ({ menuOptions }) => {
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
            {menuOptions.map(
              ({ badgeContent, Icon, isIconButton, onClickHandler }, index) =>
                isIconButton && (
                  <IconButton
                    color="inherit"
                    key={`icon-button-${index}`}
                    onClick={onClickHandler}
                    size="large"
                  >
                    <Badge badgeContent={badgeContent} color="error">
                      <Icon />
                    </Badge>
                  </IconButton>
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
          menuOptions={menuOptions}
          onClose={handleMobileMenuClose}
          open={Boolean(mobileMoreAnchorEl)}
        />
      }
    </Box>
  );
};
