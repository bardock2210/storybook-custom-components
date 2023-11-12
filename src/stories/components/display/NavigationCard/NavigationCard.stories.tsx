// vendors
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Grid } from "@mui/material";

// components
import { NavigationCard, NavigationCardProps } from "./NavigationCard";
import PageContainer from "@/components/container/PageContainer";

const cards: NavigationCardProps[] = [
  {
    color: "primary",
    icon: "gg:profile",
    onClickHandler: action("onClickHandler called for Perfil"),
    title: "Perfil",
    variant: "outlined",
  },
  {
    color: "secondary",
    icon: "ant-design:project-filled",
    onClickHandler: action("onClickHandler called for Proyectos"),
    title: "Proyectos",
    variant: "outlined",
  },
  {
    color: "info",
    icon: "ri:shopping-bag-fill",
    onClickHandler: action("onClickHandler called for Compras"),
    title: "Compras",
    variant: "outlined",
  },
  {
    color: "warning",
    icon: "mdi:clock",
    onClickHandler: action("onClickHandler called for Logs"),
    title: "Logs",
    variant: "outlined",
  },
  {
    color: "error",
    icon: "fluent-mdl2:product-variant",
    onClickHandler: action("onClickHandler called for Productos"),
    title: "Productos",
    variant: "outlined",
  },
  {
    icon: "gg:profile",
    onClickHandler: action("onClickHandler called for Perfil"),
    title: "Account",
    variant: "outlined",
  },
  {
    color: "indigo",
    icon: "fluent-mdl2:product-variant",
    onClickHandler: action("onClickHandler called for Perfil"),
    title: "Deliveries",
    variant: "outlined",
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
      <PageContainer title="Dashboard">
        {cards.map((card, index) => (
          <NavigationCard {...card} key={`navigation-card-${index}`} />
        ))}
      </PageContainer>
    );
  },
};

export const Default: Story = {
  ...NavigationCardTemplate,
  args: {
    color: "secondary",
    icon: "gg:profile",
    title: "Perfil",
    variant: "outlined",
  },
};

export const WithPageContainer: Story = {
  ...NavigationCardsTemplate,
  args: {},
};
