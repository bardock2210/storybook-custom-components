import { Meta, StoryObj } from "@storybook/react";
import { PageWrapper } from "./PageWrapper";

const meta: Meta<typeof PageWrapper> = {
  component: PageWrapper,
  title: "ZipCodeService/Container/PageWrapper",
};

export default meta;
type Story = StoryObj<typeof PageWrapper>;

const Template: Story = {
  render: (args) => {
    return <PageWrapper {...args} />;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    title: "Defalult",
  },
};
