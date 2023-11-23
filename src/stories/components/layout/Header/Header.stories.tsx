import { MouseEvent } from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  AccountCircle,
  LogoutOutlined,
  NotificationsNoneOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Header } from "./Header";

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
    hasSubMenu: true,
    icon: <SettingsOutlined />,
    isIconButton: true,
    message: "Settings",
    onClickHandler: () => console.log("Settings"),
  },
  {
    hasSubMenu: false,
    icon: <AccountCircle />,
    isIconButton: false,
    message: "Perfil",
    onClickHandler: () => console.log("Perfil"),
  },
  {
    hasSubMenu: false,
    icon: <LogoutOutlined />,
    isIconButton: false,
    message: "Cerrar Sesión",
    onClickHandler: (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      console.log("Cerrar Sesión");
    },
  },
];

const meta: Meta<typeof Header> = {
  component: Header,
  title: "ZipCodeService/Layout/Header",
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    menuOptions: menuOptions,
    user: {
      email: "joe.hola.esto.es.un.correo.muy.largo.moe@company.com",
      name: "John Smith",
    },
  },
};
