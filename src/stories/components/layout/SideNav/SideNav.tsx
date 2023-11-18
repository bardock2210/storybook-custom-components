// vendors
import { FC } from "react";
import {
  Avatar,
  Box,
  ButtonBase,
  Divider,
  Drawer,
  DrawerProps,
  Stack,
  Typography,
} from "@mui/material";

// hooks
import { useResponsive } from "@/hooks/useResponsive";

// styles
import {
  getSideNavItemSx,
  getSideNavItemIconSx,
  getSideNavItemTextSx,
  sideNavPaperSx,
  sideNavSx,
  userCardSx,
} from "./SideNav.styles";

export interface SideNaveItemProps {
  active?: boolean;
  disabled?: boolean;
  icon?: JSX.Element;
  route: string;
  title: string;
}

interface UserCardProps {
  avatar?: string;
  email: string;
  name: string;
}

export interface SideNaveProps extends DrawerProps {
  items: SideNaveItemProps[];
  logo: {
    icon: JSX.Element;
    title: string;
    onClick: () => void;
  };
  onSideNavItemHandler: (itemRoute: string) => void;
  user: {
    email: string;
    name: string;
  };
}

const UserCard: FC<UserCardProps> = ({ avatar, email, name }) => (
  <Box component="div" sx={userCardSx}>
    <Avatar src={avatar} alt="photoURL" />
    <Box component="div">
      <Typography noWrap textOverflow="ellipsis" variant="subtitle2">
        {name}
      </Typography>
      <Typography noWrap textOverflow="ellipsis" variant="body2">
        {email}
      </Typography>
    </Box>
  </Box>
);

const SideNavItem: FC<SideNaveItemProps & { onItemClick: (route: string) => void }> = ({
  active,
  disabled,
  icon,
  onItemClick,
  route,
  title,
}) => (
  <Box component="li">
    <ButtonBase onClick={() => onItemClick(route)} sx={getSideNavItemSx(active)}>
      {icon && (
        <Box component="span" sx={getSideNavItemIconSx(active)}>
          {icon}
        </Box>
      )}
      <Box component="span" sx={getSideNavItemTextSx(active, disabled)}>
        {title}
      </Box>
    </ButtonBase>
  </Box>
);

export const SideNav: FC<SideNaveProps> = ({
  anchor = "left",
  items,
  logo: { icon, title, onClick },
  onSideNavItemHandler,
  onClose,
  open,
  user: { email, name },
  variant,
}) => {
  const lgUp = useResponsive("up", "lg");

  return (
    <Drawer
      anchor={anchor}
      ModalProps={{ keepMounted: true }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: sideNavPaperSx }}
      sx={sideNavSx}
      variant={variant ? variant : lgUp ? "permanent" : "temporary"}
    >
      <Box className="SideNav-header-container" component="div" onClick={onClick}>
        <Box className="SideNav-header-logo">
          {icon}
          <Typography component="div" noWrap variant="h6">
            {title}
          </Typography>
        </Box>
        <UserCard email={email} name={name} />
      </Box>
      <Divider />
      <Box component="nav">
        <Stack component="ul" spacing={0.5}>
          {items.map((item) => (
            <SideNavItem
              active={item.active}
              disabled={item.disabled}
              icon={item.icon}
              key={item.title}
              onItemClick={onSideNavItemHandler}
              route={item.route}
              title={item.title}
            />
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
};
