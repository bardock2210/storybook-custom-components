import { Meta, StoryObj } from "@storybook/react";
import {
  AccountCircle,
  NotificationsNoneOutlined,
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
    Icon: ShoppingCartOutlined,
    isIconButton: true,
    message: "Carrito de compras",
    onClickHandler: () => console.log("Carrito de compras"),
  },
  {
    badgeContent: 3,
    Icon: NotificationsNoneOutlined,
    isIconButton: true,
    message: "Notificaciones",
    onClickHandler: () => console.log("Notificaciones"),
  },
  {
    Icon: AccountCircle,
    isIconButton: true,
    message: "Perfil",
    onClickHandler: () => console.log("Perfil"),
  },
];

export const Default: Story = {
  ...HeaderTemplate,
  args: {
    menuOptions: menuOptions,
  },
};
