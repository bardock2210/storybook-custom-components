import { Meta, StoryObj } from "@storybook/react";
import { PageContainer } from "./PageContainer";

const meta: Meta<typeof PageContainer> = {
  component: PageContainer,
  title: "ZipCodeService/Container/PageWrapper",
};

export default meta;
type Story = StoryObj<typeof PageContainer>;

const Template: Story = {
  render: (args) => {
    return <PageContainer {...args}>This is an example</PageContainer>;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    title: "Defalult",
  },
};
