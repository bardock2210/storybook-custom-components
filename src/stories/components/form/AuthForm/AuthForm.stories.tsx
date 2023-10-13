import { Meta, StoryObj } from "@storybook/react";
import * as Yup from "yup";
import { AuthForm, AuthFormProps } from "./AuthForm";
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
    formTitle: "Iniciar Sesión",
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
    formTitle: "Registro de Usuario",
  },
};
