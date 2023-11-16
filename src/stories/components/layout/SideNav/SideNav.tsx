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
  styled,
} from "@mui/material";
import SimpleBar from "simplebar-react";

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

interface SideNaveItemProps {
  active?: boolean;
  disabled?: boolean;
  icon?: JSX.Element;
  onSideNavItemHandler: () => void;
  title: string;
}

interface UserCardProps {
  avatar?: string;
  email: string;
  name: string;
}

export interface SideNaveProps extends DrawerProps {
  items: SideNaveItemProps[];
  logo: JSX.Element;
  logoTitle: string;
  onSideNavItemHandler: () => void;
  onLogoHandler: () => void;
  user: {
    email: string;
    name: string;
  };
}

const Scrollbar = styled(SimpleBar)``;

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

const SideNavItem: FC<SideNaveItemProps> = ({
  active,
  disabled,
  icon,
  onSideNavItemHandler,
  title,
}) => (
  <Box component="li">
    <ButtonBase onClick={onSideNavItemHandler} sx={getSideNavItemSx(active)}>
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
  logo,
  logoTitle,
  onSideNavItemHandler,
  onClose,
  onLogoHandler,
  open,
  user: { email, name },
  variant,
}) => {
  const lgUp = useResponsive("up", "lg");

  return (
    <Drawer
      anchor={anchor}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: sideNavPaperSx }}
      sx={sideNavSx}
      variant={variant ? variant : lgUp ? "permanent" : "temporary"}
    >
      <Scrollbar className="Scrollbar-root">
        <Box className="SideNav-header-container" component="div" onClick={onLogoHandler}>
          <Box className="SideNav-header-logo">
            {logo}
            <Typography component="div" noWrap variant="h6">
              {logoTitle}
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
                onSideNavItemHandler={onSideNavItemHandler}
                title={item.title}
              />
            ))}
          </Stack>
        </Box>
        <Divider />
      </Scrollbar>
    </Drawer>
  );
};
