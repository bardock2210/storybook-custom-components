import { useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import * as Yup from "yup";
import { DynamicForm } from "./DynamicForm";
import { IFormFieldProps } from "@/types/form";
import { useGetUser } from "./useGetUser";

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

const profileFormFields: IFormFieldProps[] = [
  {
    label: "Nombre",
    name: "name",
    type: "text",
    id: "name",
    required: true,
  },
  {
    label: "Razón Social",
    name: "businessName",
    type: "text",
    id: "businessName",
    required: true,
  },
  {
    label: "RFC",
    name: "rfc",
    type: "text",
    id: "rfc",
    required: true,
  },
  {
    label: "CP de Dirección Fiscal",
    name: "taxZipCode",
    type: "number",
    id: "taxZipCode",
    required: true,
  },
  {
    label: "Clave Regimen Fiscal",
    name: "taxRegimeKey",
    type: "text",
    id: "taxRegimeKey",
    required: true,
  },
  {
    label: "CFDI",
    name: "cfdiKey",
    type: "number",
    id: "cfdiKey",
    required: true,
  },
  {
    label: "Correo",
    name: "taxEmail",
    type: "email",
    id: "taxEmail",
    required: true,
  },
  {
    label: "Teléfono",
    name: "taxPhone",
    type: "text",
    id: "taxPhone",
    required: true,
  },
];

const profileFormSchema = Yup.object().shape({
  name: Yup.string().required("Nombre es requerido"),
  businessName: Yup.string().required("Razón Social es requerida"),
  rfc: Yup.string().required("RFC es requerido"),
  taxZipCode: Yup.string().required("CP es requerido"),
  taxRegimeKey: Yup.string().required("Régimen Fiscal es requerido"),
  cfdiKey: Yup.string().required("CFDI es requerido"),
  taxEmail: Yup.string().email("Email invalido").required("Email es requerido"),
  taxPhone: Yup.string().required("Teléfono es requerido"),
});

const profileInitialState = {
  name: "",
  businessName: "",
  rfc: "",
  taxZipCode: 0,
  taxRegimeKey: 0,
  cfdiKey: 0,
  taxEmail: "",
  taxPhone: "",
};

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

const ProfileDynamicFormTemplate: Story = {
  render: (args) => {
    const [user, setUser] = useState(profileInitialState);
    const { userData, error, isLoading, isValidating, initialState } = useGetUser();

    useEffect(() => {
      if (userData && !error && !isLoading && !isValidating) {
        setUser(initialState);
      }
    }, [userData, error, isLoading, isValidating]);

    return <DynamicForm {...args} initialState={user} />;
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

export const Profile: Story = {
  ...ProfileDynamicFormTemplate,
  args: {
    formFields: profileFormFields,
    formSchema: profileFormSchema,
    initialState: profileInitialState,
    onSubmit: (params) => console.log("Submit form: ", { params }),
    primaryBtnProps: {
      fullWidth: true,
      label: "Guardar",
      type: "submit",
      variant: "contained",
    },
  },
};
