import { Meta, StoryObj } from "@storybook/react";
import { AuthPage, AuthProps } from "./AuthPage";
import { AuthForm } from "@/components/form/AuthForm/AuthForm";
import {
  Login as LoginAuthComponent,
  Register as RegisterAuthComponent,
} from "@/components/form/AuthForm/AuthForm.stories";
import { AuthFormProps } from "@/components/form/AuthForm/AuthForm";

const meta: Meta<typeof AuthPage> = {
  component: AuthPage,
  title: "ZipCodeService/Layout/AuthPage",
};

export default meta;
type Story = StoryObj<typeof AuthPage>;

const LoginTemplate: Story = {
  render: (args: AuthProps) => {
    return (
      <AuthPage {...args}>
        <AuthForm {...(LoginAuthComponent.args as AuthFormProps)} />
      </AuthPage>
    );
  },
};

const RegisterTemplate: Story = {
  render: (args: AuthProps) => {
    return (
      <AuthPage {...args}>
        <AuthForm {...(RegisterAuthComponent.args as AuthFormProps)} />
      </AuthPage>
    );
  },
};

export const Login: Story = {
  ...LoginTemplate,
  args: {
    sideBar: {
      image: (
        <img
          alt="Login section"
          src="https://res.cloudinary.com/db4mdaght/image/upload/v1692862264/zip-code/illustration_login_ufrmhm.png"
        />
      ),
      title: "Bienvenido a ZipCode",
    },
  },
};

export const Register: Story = {
  ...RegisterTemplate,
  args: {
    sideBar: {
      image: (
        <img
          alt="Register section"
          src="https://res.cloudinary.com/db4mdaght/image/upload/v1692862264/zip-code/illustration_login_ufrmhm.png"
        />
      ),
      title: "Bienvenido a ZipCode",
    },
  },
};
