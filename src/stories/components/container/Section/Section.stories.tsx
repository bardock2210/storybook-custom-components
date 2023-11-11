// vendors
import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@mui/material";

// components
import { Section } from "./Section";

const meta: Meta<typeof Section> = {
  component: Section,
  title: "ZipCodeService/Container/Section",
};

export default meta;
type Story = StoryObj<typeof Section>;

const SectionTemplate: Story = {
  render: (args) => {
    return (
      <Section {...args}>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
          numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Section>
    );
  },
};

export const Default: Story = {
  ...SectionTemplate,
  args: {
    title: "Perfil",
    variant: "outlined",
  },
};
