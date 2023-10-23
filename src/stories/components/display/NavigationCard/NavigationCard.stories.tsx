import { Meta, StoryObj } from "@storybook/react";
import { Grid } from "@mui/material";
import { NavigationCard, NavigationCardProps } from "./NavigationCard";

const cards: NavigationCardProps[] = [
  {
    color: "primary",
    icon: "gg:profile",
    title: "Perfil",
  },
  {
    color: "secondary",
    icon: "ant-design:project-filled",
    title: "Proyectos",
  },
  {
    color: "info",
    icon: "ri:shopping-bag-fill",
    title: "Compras",
  },
  {
    color: "warning",
    icon: "mdi:clock",
    title: "Logs",
  },
  {
    color: "error",
    icon: "fluent-mdl2:product-variant",
    title: "Productos",
  },
];

const meta: Meta<typeof NavigationCard> = {
  component: NavigationCard,
  title: "ZipCodeService/Display/NavigationCard",
};

export default meta;
type Story = StoryObj<typeof NavigationCard>;

const NavigationCardTemplate: Story = {
  render: (args) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NavigationCard {...args} />
        </Grid>
      </Grid>
    );
  },
};

const NavigationCardsTemplate: Story = {
  render: (args) => {
    return (
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item key={`card-grid-item-${index}`} xs={3}>
            <NavigationCard {...card} />
          </Grid>
        ))}
      </Grid>
    );
  },
};

export const Default: Story = {
  ...NavigationCardTemplate,
  args: {
    color: "secondary",
    icon: "gg:profile",
    title: "Perfil",
  },
};

export const MultipleCards: Story = {
  ...NavigationCardsTemplate,
  args: {},
};
