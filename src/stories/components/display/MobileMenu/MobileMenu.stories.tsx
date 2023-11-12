// vendors
import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  AccountCircle,
  NotificationsNoneOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

// components
import { MobileMenu, MobileMenuProps } from "./MobileMenu";
import { Button } from "@mui/material";

const meta: Meta<typeof MobileMenu> = {
  argTypes: {
    open: {
      type: "boolean",
      defaultValue: false,
    },
  },
  component: MobileMenu,
  title: "ZipCodeService/Display/MobileMenu",
};

export default meta;
type Story = StoryObj<typeof MobileMenu>;

const MobileMenuTemplate: Story = {
  render: (args: MobileMenuProps) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event: any) => {
      setAnchorEl(event.currentTarget);
    };

    return (
      <>
        <Button onClick={handleOpenMenu} variant="contained">
          Open Menu
        </Button>
        <MobileMenu
          {...args}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          open={Boolean(anchorEl)}
        />
      </>
    );
  },
};

export const Default: Story = {
  ...MobileMenuTemplate,
  args: {
    menuOptions: [
      {
        badgeContent: 5,
        hasSubMenu: false,
        icon: <ShoppingCartOutlined />,
        isIconButton: true,
        message: "Carrito de compras",
        onClickHandler: action("Carrito de compras"),
      },
      {
        badgeContent: 3,
        hasSubMenu: false,
        icon: <NotificationsNoneOutlined />,
        isIconButton: true,
        message: "Notificaciones",
        onClickHandler: action("Notificaciones"),
      },
      {
        hasSubMenu: false,
        icon: <AccountCircle />,
        isIconButton: true,
        message: "Perfil",
        onClickHandler: action("Perfil"),
      },
    ],
    open: false,
    user: {
      email: "joe.moe@company.com",
      name: "Joe Moe",
    },
  },
};
