import { Meta, StoryObj } from "@storybook/react";
import {
  AccountCircle,
  LogoutOutlined,
  NotificationsNoneOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Header, HeaderProps } from "./Header";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "ZipCodeService/Layout/Header",
};

export default meta;
type Story = StoryObj<typeof Header>;

const HeaderTemplate: Story = {
  render: (args: HeaderProps) => {
    return <Header {...args} />;
  },
};

const menuOptions = [
  {
    badgeContent: 5,
    hasSubMenu: false,
    Icon: ShoppingCartOutlined,
    isIconButton: true,
    message: "Carrito de compras",
    onClickHandler: () => console.log("Carrito de compras"),
  },
  {
    badgeContent: 3,
    hasSubMenu: false,
    Icon: NotificationsNoneOutlined,
    isIconButton: true,
    message: "Notificaciones",
    onClickHandler: () => console.log("Notificaciones"),
  },
  {
    hasSubMenu: true,
    Icon: SettingsOutlined,
    isIconButton: true,
    message: "Settings",
    onClickHandler: () => console.log("Settings"),
  },
  {
    hasSubMenu: false,
    Icon: AccountCircle,
    isIconButton: false,
    message: "Perfil",
    onClickHandler: () => console.log("Perfil"),
  },
  {
    hasSubMenu: false,
    Icon: LogoutOutlined,
    isIconButton: false,
    message: "Cerrar Sesión",
    onClickHandler: () => console.log("Cerrar Sesión"),
  },
];

export const Default: Story = {
  ...HeaderTemplate,
  args: {
    menuOptions: menuOptions,
  },
};
