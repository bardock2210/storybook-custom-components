// vendors
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { Box, SvgIcon, Toolbar, Typography } from "@mui/material";

// components
import { SideNav, SideNavProps } from "./SideNav";
import { Header, HeaderProps } from "@/components/layout/Header/Header";

// stories
import { Default as HeaderComponent } from "@/components/layout/Header/Header.stories";

// icons
import {
  AccountCircle,
  AccountTree,
  Article,
  Category,
  PlaceOutlined,
  ShoppingBag,
} from "@mui/icons-material";

const SIDE_NAV_WIDTH = 280;

const logo = {
  icon: <PlaceOutlined />,
  onClick: action("onClick logo"),
  title: "ZipCode Services",
};

const user = {
  email: "joe.smith@domainasdfasdfasdf.com",
  name: "Joe Smith",
};

const items = [
  {
    active: true,
    icon: (
      <SvgIcon fontSize="small">
        <AccountCircle />
      </SvgIcon>
    ),
    route: "profile",
    title: "Perfil",
  },
  {
    icon: (
      <SvgIcon fontSize="small">
        <AccountTree />
      </SvgIcon>
    ),
    route: "projects",
    title: "Proyectos",
  },
  {
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingBag />
      </SvgIcon>
    ),
    route: "sales",
    title: "Compras",
  },
  {
    icon: (
      <SvgIcon fontSize="small">
        <Article />
      </SvgIcon>
    ),
    route: "logs",
    title: "Logs",
  },
  {
    icon: (
      <SvgIcon fontSize="small">
        <Category />
      </SvgIcon>
    ),
    route: "products",
    title: "Productos",
  },
];

const meta: Meta<typeof SideNav> = {
  component: SideNav,
  title: "ZipCodeService/Layout/SideNav",
};

export default meta;
type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  args: {
    anchor: "left",
    items,
    logo,
    user,
  },
};

export const WithLayout: Story = {
  args: {
    anchor: "left",
    items,
    logo,
    user,
  },
  render: (args: SideNavProps) => {
    const [open, setOpen] = useState(false);

    const onOpenSidebar = () => setOpen(!open);

    return (
      <Box sx={{ display: "flex" }}>
        <Header {...(HeaderComponent.args as HeaderProps)} onOpenSidebar={onOpenSidebar} sideNav />
        <SideNav {...args} onClose={onOpenSidebar} open={open} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { lg: `calc(100% - ${SIDE_NAV_WIDTH}px)` } }}
        >
          <Toolbar />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
            elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
            hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
            Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
            viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
            Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
            at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
            ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
            sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
            In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
            viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </Box>
      </Box>
    );
  },
};
