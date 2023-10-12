import { Meta, StoryObj } from "@storybook/react";
import * as Yup from "yup";
import { AuthPage, AuthProps } from "./AuthPage";
import { IFormFieldProps } from "@/types/form";

export interface ILoginValues {
  email: string;
  password: string;
}

export interface IRegisterValues {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const loginInitialState: ILoginValues = {
  email: "",
  password: "",
};

const loginFormFields: IFormFieldProps[] = [
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

const loginFormSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Email es requerido"),
  password: Yup.string().required("Password es requerido"),
});

const registerInitialState: IRegisterValues = {
  email: "",
  password: "",
  name: "",
  confirmPassword: "",
  phone: "",
};

const registerFormFields: IFormFieldProps[] = [
  {
    label: "Nombre",
    name: "name",
    type: "text",
    id: "name",
    required: true,
  },
  {
    label: "Correo",
    name: "email",
    type: "email",
    id: "email",
    required: true,
  },
  {
    label: "Teléfono",
    name: "phone",
    type: "phone",
    id: "phone",
    required: true,
  },
  {
    label: "Contraseña",
    name: "password",
    type: "password",
    id: "password",
    required: true,
  },
  {
    label: "Confirmar Contraseña",
    name: "confirmPassword",
    type: "password",
    id: "confirmPassword",
    required: true,
  },
];

const registerFormSchema = Yup.object().shape({
  name: Yup.string().required("Nombre es requerido"),
  email: Yup.string().email("Email invalido").required("Email es requerido"),
  phone: Yup.string().required("Teléfono es requerido"),
  password: Yup.string().required("Contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
    .required("Confirmar contraseña es requerido"),
});

const meta: Meta<typeof AuthPage> = {
  component: AuthPage,
  title: "ZipCodeService/Form/AuthPage",
};

export default meta;
type Story = StoryObj<typeof AuthPage>;

const AuthTemplate: Story = {
  render: (args: AuthProps) => {
    return <AuthPage {...args} />;
  },
};

export const Login: Story = {
  ...AuthTemplate,
  args: {
    forgotPassword: {
      forgotPasswordDescription: "¿Olvidaste tu contraseña?",
      forgotPasswordHandler: () => console.log("click on forgot password"),
    },
    formTitle: "Autenticación",
    authFormProps: {
      formFields: loginFormFields,
      formSchema: loginFormSchema,
      initialState: loginInitialState,
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

export const Register: Story = {
  ...AuthTemplate,
  args: {
    forgotPassword: {
      forgotPasswordDescription: "",
      forgotPasswordHandler: () => console.log("click on forgot password"),
    },
    formTitle: "Registro de Usuario",
    authFormProps: {
      formFields: registerFormFields,
      formSchema: registerFormSchema,
      initialState: registerInitialState,
      onSubmit: (params) => console.log("Submit form: ", { params }),
      primaryBtnProps: {
        fullWidth: true,
        label: "Registrarse",
        type: "submit",
        variant: "contained",
      },
    },
    haveAnAccount: {
      registerDescription: "Inicia sesión aquí",
      registerHandler: () => console.log("click on login form"),
      question: "Si ya estás registrado",
    },
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
