import { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: "ZipCodeService/Layout/Loading",
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    color: "inherit",
    open: true,
  },
};
