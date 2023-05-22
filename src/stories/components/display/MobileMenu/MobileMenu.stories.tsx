import { Meta, StoryObj } from "@storybook/react";
import { MobileMenu, MobileMenuProps } from "./MobileMenu";

const meta: Meta<typeof MobileMenu> = {
  component: MobileMenu,
  title: "ZipCodeService/Display/MobileMenu",
};

export default meta;
type Story = StoryObj<typeof MobileMenu>;

const MobileMenuTemplate: Story = {
  render: (args: MobileMenuProps) => {
    const openMenuHandler = () => {
      console.log("show inner menu");
    };

    return <MobileMenu {...args} />;
  },
};

export const Default: Story = {
  ...MobileMenuTemplate,
  args: {
    cartTotalElements: 4,
    notificationTotal: 5,
    open: true,
  },
};
