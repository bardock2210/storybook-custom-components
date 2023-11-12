import { Meta, StoryObj } from "@storybook/react";
import { AuthForm, AuthFormProps } from "./AuthForm";
import {
  Login as LoginComponent,
  Register as RegistrationComponent,
} from "@/components/form/DynamicForm/DynamicForm.stories";
import { DynamicFormProps } from "@/components/form/DynamicForm/DynamicForm";

const meta: Meta<typeof AuthForm> = {
  component: AuthForm,
  title: "ZipCodeService/Form/AuthForm",
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

const AuthFormTemplate: Story = {
  render: (args: AuthFormProps) => {
    return <AuthForm {...args} />;
  },
};

export const Login: Story = {
  ...AuthFormTemplate,
  args: {
    actions: {
      haveAccount: {
        description: "Si aún no tienes una cuenta",
        link: "Registrate aquí",
        linkHandler: () => console.log("click on register form"),
      },
      question: {
        link: "¿Olvidaste tu contraseña?",
        linkHandler: () => console.log("click on forgot password"),
      },
    },
    authFormProps: { ...(LoginComponent.args as DynamicFormProps) },
    title: "Iniciar Sesión",
  },
};

export const Register: Story = {
  ...AuthFormTemplate,
  args: {
    actions: {
      haveAccount: {
        description: "Si ya estás registrado",
        link: "Inicia sesión aquí",
        linkHandler: () => console.log("click on login form"),
      },
      question: {
        link: "",
        linkHandler: () => console.log("click on forgot password"),
      },
    },
    authFormProps: { ...(RegistrationComponent.args as DynamicFormProps) },
    title: "Registro de Usuario",
  },
};
