import { CustomLabel } from "../../components";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/CustomLabel",
  component: CustomLabel,
  argTypes: {
    color: { control: "select" },
    size: { control: "select" },
    fontColor: { control: "color" },
  },
} as ComponentMeta<typeof CustomLabel>;

const Template: ComponentStory<typeof CustomLabel> = (args) => (
  <CustomLabel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Label",
  size: "normal",
  allCaps: false,
  color: "primary",
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: "Allcaps Label",
  size: "normal",
  allCaps: true,
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Label",
  size: "normal",
  allCaps: false,
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Tertiary Label",
  size: "normal",
  allCaps: false,
  color: "tertiary",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  label: "Custom Color Label",
  size: "normal",
  allCaps: false,
  fontColor: "#679267",
};
