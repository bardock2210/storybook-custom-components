// vendors
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SvgIcon } from "@mui/material";

// components
import { SideNav, SideNaveProps } from "./SideNav";

// icons
import {
  AccountCircle,
  AccountTree,
  Article,
  Category,
  LogoutOutlined,
  PlaceOutlined,
  ShoppingBag,
} from "@mui/icons-material";

const meta: Meta<typeof SideNav> = {
  component: SideNav,
  title: "ZipCodeService/Layout/SideNav",
};

export default meta;
type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  args: {
    anchor: "left",
    items: [
      {
        active: true,
        title: "Perfil",
        icon: (
          <SvgIcon fontSize="small">
            <AccountCircle />
          </SvgIcon>
        ),
        onSideNavItemHandler: action("click on Perfil"),
      },
      {
        title: "Proyectos",
        icon: (
          <SvgIcon fontSize="small">
            <AccountTree />
          </SvgIcon>
        ),
        onSideNavItemHandler: action("click on Proyectos"),
      },
      {
        title: "Compras",
        icon: (
          <SvgIcon fontSize="small">
            <ShoppingBag />
          </SvgIcon>
        ),
        onSideNavItemHandler: action("click on Compras"),
      },
      {
        title: "Logs",
        icon: (
          <SvgIcon fontSize="small">
            <Article />
          </SvgIcon>
        ),
        onSideNavItemHandler: action("click on Logs"),
      },
      {
        title: "Productos",
        icon: (
          <SvgIcon fontSize="small">
            <Category />
          </SvgIcon>
        ),
        onSideNavItemHandler: action("click on Productos"),
      },
    ],
    logo: <PlaceOutlined />,
    logoTitle: "ZipCode Services",
    user: {
      email: "joe.smith@domainasdfasdfasdf.com",
      name: "Joe Smith",
    },
  },
  render: (args: SideNaveProps) => {
    return <SideNav {...args} />;
  },
};
