// vendors
import { useState, type FC, type MouseEvent } from "react";
import { AppBar, Badge, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

// components
import { MobileMenu, MenuOptionsProps } from "@/components/display/MobileMenu/MobileMenu";

// hooks
import { useResponsive } from "@/hooks/useResponsive";

// styles
import { getAppBarStyles } from "./Header.styles";

// icons
import MenuIcon from "@mui/icons-material/Menu";

export interface HeaderProps {
  menuOptions: MenuOptionsProps[];
  onOpenSidebar: () => void;
  sideNav?: boolean;
  user: {
    name: string;
    email: string;
  };
}

export const Header: FC<HeaderProps> = ({ menuOptions, onOpenSidebar, sideNav, user }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const lgUp = useResponsive("up", "lg");
  const smDown = useResponsive("down", "sm");

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
    <>
      <AppBar position="fixed" sx={getAppBarStyles(Boolean(sideNav))}>
        <Toolbar>
          {!lgUp && (
            <Box component="div" onClick={onOpenSidebar}>
              <IconButton size="large">
                <MenuIcon />
              </IconButton>
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }} />
          {!smDown && (
            <Box>
              {menuOptions.map(
                (
                  { badgeContent, icon, hasSubMenu, isIconButton, message, onClickHandler },
                  index
                ) =>
                  isIconButton && (
                    <Tooltip key={`icon-button-${index}`} title={message}>
                      <IconButton
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
          )}
          {smDown && (
            <Box>
              <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} size="large">
                <MoreVert />
              </IconButton>
            </Box>
          )}
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
    </>
  );
};
