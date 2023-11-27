// vendors
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// components
import { AuthForm } from "./AuthForm";

// stories
import {
  Login as LoginComponent,
  Register as RegistrationComponent,
} from "@/components/form/DynamicForm/DynamicForm.stories";

// types
import type { DynamicFormProps } from "@/components/form/DynamicForm/DynamicForm";

const meta: Meta<typeof AuthForm> = {
  component: AuthForm,
  title: "ZipCodeService/Form/AuthForm",
};

export default meta;
type Story = StoryObj<typeof AuthForm>;

export const Login: Story = {
  args: {
    actions: {
      haveAccount: {
        description: "Si aún no tienes una cuenta",
        link: "Registrate aquí",
        linkHandler: action("click on register form"),
      },
      question: {
        link: "¿Olvidaste tu contraseña?",
        linkHandler: action("click on forgot password"),
      },
    },
    authFormProps: {
      ...(LoginComponent.args as DynamicFormProps),
      onSubmit: action("onLoginSubmit"),
    },
    title: "Iniciar Sesión",
  },
};

export const Register: Story = {
  args: {
    actions: {
      haveAccount: {
        description: "Si ya estás registrado",
        link: "Inicia sesión aquí",
        linkHandler: action("click on login form"),
      },
      question: {
        link: "",
        linkHandler: action("click on forgot password"),
      },
    },
    authFormProps: {
      ...(RegistrationComponent.args as DynamicFormProps),
      onSubmit: action("onRegisterSubmit"),
    },
    title: "Registro de Usuario",
  },
};
