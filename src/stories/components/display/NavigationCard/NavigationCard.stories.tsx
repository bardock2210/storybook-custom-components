import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { NavigationCard, NavigationCardProps } from "./NavigationCard";

const cards: NavigationCardProps[] = [
  {
    color: "primary",
    icon: "gg:profile",
    onClickHandler: action("onClickHandler called for Perfil"),
    title: "Perfil",
  },
  {
    color: "secondary",
    icon: "ant-design:project-filled",
    onClickHandler: action("onClickHandler called for Proyectos"),
    title: "Proyectos",
  },
  {
    color: "info",
    icon: "ri:shopping-bag-fill",
    onClickHandler: action("onClickHandler called for Compras"),
    title: "Compras",
  },
  {
    color: "warning",
    icon: "mdi:clock",
    onClickHandler: action("onClickHandler called for Logs"),
    title: "Logs",
  },
  {
    color: "error",
    icon: "fluent-mdl2:product-variant",
    onClickHandler: action("onClickHandler called for Productos"),
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

    return (
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item key={`card-grid-item-${index}`} xs={isMobile ? 12 : isTablet ? 4 : 3}>
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
