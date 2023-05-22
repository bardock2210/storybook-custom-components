import { FC } from "react";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import {
  AccountCircle,
  NotificationsNoneOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export interface MobileMenuProps {
  anchorEl?: Element | ((element: Element) => Element) | null;
  cartMenuHandler: () => void;
  cartTotalElements: number;
  notificationMenuHandler: () => void;
  notificationTotal: number;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  open: boolean;
  profileMenuHandler: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({
  anchorEl,
  cartMenuHandler,
  cartTotalElements,
  notificationMenuHandler,
  notificationTotal,
  onClose,
  open,
  profileMenuHandler,
}) => {
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
    >
      <MenuItem>
        <IconButton color="inherit" onClick={cartMenuHandler} size="large">
          <Badge badgeContent={cartTotalElements} color="error">
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit" onClick={notificationMenuHandler} size="large">
          <Badge badgeContent={notificationTotal} color="error">
            <NotificationsNoneOutlined />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit" onClick={profileMenuHandler} size="large">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};
