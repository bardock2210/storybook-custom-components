import { Meta, StoryObj } from "@storybook/react";
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

export const Default: Story = {
  ...HeaderTemplate,
  args: {
    cartMenuHandler: () => console.log("Redirect to the cart page"),
    cartTotalElements: 5,
    notificationMenuHandler: () => console.log("Redirect to the notifications page"),
    notificationTotal: 3,
    profileMenuHandler: () => console.log("Redirect to the profile page"),
  },
};
