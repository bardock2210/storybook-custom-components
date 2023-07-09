import { Meta, StoryObj } from "@storybook/react";
import * as Yup from "yup";
import { DynamicForm } from "./DynamicForm";
import { IFormFieldProps } from "@/types/form";

export interface ILoginValues {
  email: string;
  password: string;
}

const LOGIN_INITIAL_STATE: ILoginValues = {
  email: "",
  password: "",
};

const REGISTRATION_INITIAL_STATE = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
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

const REGISTRATION_FORM_DATA: IFormFieldProps[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    id: "name",
    required: true,
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    id: "lastName",
    required: true,
  },
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
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    id: "confirmPassword",
    required: true,
  },
];

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Email es requerido"),
  password: Yup.string().required("Password es requerido"),
});

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required("Nombre es requerido"),
  lastName: Yup.string().required("Apellido es requerido"),
  email: Yup.string().email("Email invalido").required("Email es requerido"),
  password: Yup.string().required("Password es requerido"),
  confirmPassword: Yup.string()
    .required("La confirmacion del password es requerido")
    .oneOf([Yup.ref("password")], "Los passwords deben de coincidir"),
});

const meta: Meta<typeof DynamicForm> = {
  component: DynamicForm,
  title: "ZipCodeService/Form/DynamicForm/DynamicForm",
};

export default meta;
type Story = StoryObj<typeof DynamicForm>;

const DynamicFormTemplate: Story = {
  render: (args) => {
    return <DynamicForm {...args} />;
  },
};

export const Default: Story = {
  ...DynamicFormTemplate,
  args: {
    formFields: LOGIN_FORM_DATA,
    formSchema: LoginSchema,
    initialState: LOGIN_INITIAL_STATE,
    onSubmit: (params) => console.log("Submit form: ", { params }),
    primaryBtnProps: {
      fullWidth: true,
      label: "Log In",
      type: "submit",
      variant: "contained",
    },
  },
};

export const Registration: Story = {
  ...DynamicFormTemplate,
  args: {
    formFields: REGISTRATION_FORM_DATA,
    formSchema: RegistrationSchema,
    initialState: REGISTRATION_INITIAL_STATE,
    onSubmit: (params) => console.log("Submit form: ", { params }),
    primaryBtnProps: {
      fullWidth: true,
      label: "Register",
      type: "submit",
      variant: "contained",
    },
    secondaryBtnProps: {
      fullWidth: true,
      label: "Cancel",
      type: "button",
      variant: "contained",
    },
  },
};
