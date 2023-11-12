import { Meta, StoryObj } from "@storybook/react";
import { PageContainer } from "./PageContainer";
import {
  NavigationCard,
  NavigationCardProps,
} from "@/components/display/NavigationCard/NavigationCard";
import { action } from "@storybook/addon-actions";

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
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </PageContainer>
    );
  },
};

const ManyChildrenTemplate: Story = {
  render: (args) => {
    return (
      <PageContainer {...args}>
        {cards.map(({ color, icon, onClickHandler, title }, index) => (
          <NavigationCard
            color={color}
            icon={icon}
            key={`navigation-card-${index}`}
            onClickHandler={onClickHandler}
            title={title}
          />
        ))}
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

export const SeveralChildren: Story = {
  ...ManyChildrenTemplate,
  args: {
    title: "Several Children",
  },
};
