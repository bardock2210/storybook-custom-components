// vendors
import type { Dispatch, FC, MouseEvent } from "react";
import {
  Badge,
  Box,
  Divider,
  Icon,
  Menu,
  MenuItem,
  Typography,
  type PopoverVirtualElement,
} from "@mui/material";

// styles
import { menuSx, menuItemSx } from "./MobileMenu.styles";

export interface MenuOptionsProps {
  badgeContent?: number;
  hasSubMenu: boolean;
  icon: JSX.Element;
  isIconButton: boolean;
  message: string;
  onClickHandler: (e: MouseEvent<HTMLElement>) => void;
}

export interface MobileMenuProps {
  anchorEl:
    | Element
    | (() => Element)
    | PopoverVirtualElement
    | (() => PopoverVirtualElement)
    | null
    | undefined;
  menuOptions: MenuOptionsProps[];
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  open: boolean;
  setAnchorEl: Dispatch<React.SetStateAction<HTMLElement | null>>;
  user: {
    name: string;
    email: string;
  };
}

interface RenderMenuItemsProps {
  menuOptions: MenuOptionsProps[];
  setAnchorEl: Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const RenderMenuItems = ({ menuOptions, setAnchorEl }: RenderMenuItemsProps) => {
  const onClickMenuItem = (
    e: MouseEvent<HTMLElement, globalThis.MouseEvent>,
    onClickHandler: (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void
  ) => {
    onClickHandler(e);
    setAnchorEl(null);
  };

  return (
    <>
      {menuOptions.map(({ badgeContent, icon, message, onClickHandler }, index) => {
        return (
          <Box key={`menu-item-${index}`}>
            {(menuOptions.length - 1 === index || index === 0) && (
              <Divider
                key={`divider-item-${index}`}
                sx={{ borderStyle: "dashed", margin: "8px 0" }}
              />
            )}
            <MenuItem
              key={`menu-item-${index}`}
              onClick={(e) => onClickMenuItem(e, onClickHandler)}
              sx={menuItemSx}
            >
              {badgeContent ? (
                <Badge badgeContent={badgeContent} color="error">
                  {icon}
                </Badge>
              ) : (
                <Icon>{icon}</Icon>
              )}
              <p>{message}</p>
            </MenuItem>
          </Box>
        );
      })}
    </>
  );
};

export const MobileMenu: FC<MobileMenuProps> = ({
  anchorEl,
  menuOptions,
  onClose,
  open,
  setAnchorEl,
  user,
}) => (
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
    <Box sx={{ my: 1, px: 1 }}>
      <Typography noWrap variant="subtitle2">
        {user.name}
      </Typography>
      <Typography noWrap variant="body2">
        {user.email}
      </Typography>
    </Box>
    <RenderMenuItems menuOptions={menuOptions} setAnchorEl={setAnchorEl} />
  </Menu>
);
