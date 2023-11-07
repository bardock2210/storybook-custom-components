import { Meta, StoryObj } from "@storybook/react";
import { Grid } from "@mui/material";
import { PageContainer } from "./PageContainer";

const meta: Meta<typeof PageContainer> = {
  component: PageContainer,
  title: "ZipCodeService/Container/PageContainer",
};

export default meta;
type Story = StoryObj<typeof PageContainer>;

const Template: Story = {
  render: (args) => {
    return (
      <PageContainer {...args}>
        <Grid item xs={12}>
          This is an example
        </Grid>
      </PageContainer>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    title: "Defalult",
  },
};
