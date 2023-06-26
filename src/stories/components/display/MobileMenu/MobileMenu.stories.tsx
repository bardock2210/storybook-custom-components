import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MobileMenu, MobileMenuProps } from "./MobileMenu";
import {
  AccountCircle,
  NotificationsNoneOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const meta: Meta<typeof MobileMenu> = {
  component: MobileMenu,
  title: "ZipCodeService/Display/MobileMenu",
};

export default meta;
type Story = StoryObj<typeof MobileMenu>;

const MobileMenuTemplate: Story = {
  render: (args: MobileMenuProps) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };

    const menuOptions = [
      {
        badgeContent: 5,
        hasSubMenu: false,
        icon: <ShoppingCartOutlined />,
        isIconButton: true,
        message: "Carrito de compras",
        onClickHandler: () => console.log("Carrito de compras"),
      },
      {
        badgeContent: 3,
        hasSubMenu: false,
        icon: <NotificationsNoneOutlined />,
        isIconButton: true,
        message: "Notificaciones",
        onClickHandler: () => console.log("Notificaciones"),
      },
      {
        hasSubMenu: false,
        icon: <AccountCircle />,
        isIconButton: true,
        message: "Perfil",
        onClickHandler: () => console.log("Perfil"),
      },
    ];

    return (
      <MobileMenu
        {...args}
        anchorEl={mobileMoreAnchorEl}
        menuOptions={menuOptions}
        onClose={handleMobileMenuClose}
      />
    );
  },
};

export const Default: Story = {
  ...MobileMenuTemplate,
  args: {
    open: true,
  },
};
