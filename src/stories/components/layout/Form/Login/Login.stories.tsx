import { Meta, StoryObj } from "@storybook/react";
import * as Yup from "yup";
import { Login, LoginProps } from "./Login";
import { IFormFieldProps } from "@/types/form";

export interface ILoginValues {
  email: string;
  password: string;
}

const LOGIN_INITIAL_STATE: ILoginValues = {
  email: "",
  password: "",
};

const LOGIN_FORM_DATA: IFormFieldProps[] = [
  {
    label: "Email",
    name: "email",
    type: "email",
    id: "email",
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    id: "password",
    required: true,
  },
];

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Email es requerido"),
  password: Yup.string().required("Password es requerido"),
});

const meta: Meta<typeof Login> = {
  component: Login,
  title: "ZipCodeService/Layout/Form/Login",
};

export default meta;
type Story = StoryObj<typeof Login>;

const LoginTemplate: Story = {
  render: (args: LoginProps) => {
    return <Login {...args} />;
  },
};

export const Default: Story = {
  ...LoginTemplate,
  args: {
    forgotPassword: {
      forgotPasswordDescription: "¿Olvidaste tu contraseña?",
      forgotPasswordHandler: () => console.log("click on forgot password"),
    },
    formTitle: "Autenticación",
    loginFormProps: {
      formFields: LOGIN_FORM_DATA,
      formSchema: LoginSchema,
      initialState: LOGIN_INITIAL_STATE,
      onSubmit: (params) => console.log("Submit form: ", { params }),
      primaryBtnProps: {
        fullWidth: true,
        label: "Iniciar Sesión",
        type: "submit",
        variant: "contained",
      },
    },
    haveAnAccount: {
      registerDescription: "Registrate aquí",
      registerHandler: () => console.log("click on register form"),
      question: "Si aún no tienes una cuenta",
    },
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
