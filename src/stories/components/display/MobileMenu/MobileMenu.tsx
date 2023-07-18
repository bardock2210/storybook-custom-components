import { FC, MouseEvent } from "react";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { menuSx, menuItemSx } from "./mobileMenuStyles";

export interface MenuOptionsProps {
  badgeContent?: number;
  hasSubMenu: boolean;
  icon: JSX.Element;
  isIconButton: boolean;
  message: string;
  onClickHandler: (e: MouseEvent<HTMLElement>) => void;
}

export interface MobileMenuProps {
  anchorEl: Element | ((element: Element) => Element) | null;
  menuOptions: MenuOptionsProps[];
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  open: boolean;
}

interface RenderMenuItemsProps {
  menuOptions: MenuOptionsProps[];
}

const RenderMenuItems = ({ menuOptions }: RenderMenuItemsProps) => {
  return (
    <>
      {menuOptions.map(({ badgeContent, icon, message, onClickHandler }, index) => (
        <MenuItem key={`menu-item-${index}`} onClick={onClickHandler} sx={menuItemSx}>
          <IconButton color="inherit" size="medium">
            {badgeContent ? (
              <Badge badgeContent={badgeContent} color="error">
                {icon}
              </Badge>
            ) : (
              <>{icon}</>
            )}
          </IconButton>
          <p>{message}</p>
        </MenuItem>
      ))}
    </>
  );
};

export const MobileMenu: FC<MobileMenuProps> = ({ anchorEl, menuOptions, onClose, open }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={onClose}
      sx={menuSx}
    >
      <RenderMenuItems menuOptions={menuOptions} />
    </Menu>
  );
};
