import { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";

const meta: Meta<typeof Section> = {
  component: Section,
  title: "ZipCodeService/Container/Section",
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {},
};
