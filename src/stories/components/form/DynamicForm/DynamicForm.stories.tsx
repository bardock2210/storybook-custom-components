import { useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import * as Yup from "yup";
import { DynamicForm } from "./DynamicForm";
import { IFormFieldProps, OptionProps } from "@/types/form";
import { InitialState, useGetUser } from "./useGetUser";

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

const taxRegimenKeyOptions: OptionProps[] = [
  {
    value: 605,
    description: "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
  },
  { value: 606, description: "606 - Arrendamiento" },
  {
    value: 607,
    description: "607 - Régimen de Enajenación o Adquisición de Bienes",
  },
  { value: 608, description: "608 - Demás ingresos" },
  {
    value: 610,
    description: "610 - Residentes en el Extranjero sin Establecimiento Permanente en México",
  },
  {
    value: 611,
    description: "611 - Ingresos por Dividendos (socios y accionistas)",
  },
  {
    value: 612,
    description: "612 - Personas Físicas con Actividades Empresariales y Profesionales",
  },
  { value: 614, description: "614 - Ingresos por intereses" },
  {
    value: 615,
    description: "615 - Régimen de los ingresos por obtención de premios",
  },
  { value: 616, description: "616 - Sin obligaciones fiscales" },
  { value: 621, description: "621 - Incorporación Fiscal" },
  {
    value: 625,
    description:
      "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
  },
  { value: "626", description: "626 - Régimen Simplificado de Confianza" },
];

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
    defaultValue: 0,
    label: "Clave Regimen Fiscal",
    name: "taxRegimeKey",
    type: "select",
    id: "taxRegimeKey",
    placeholder: "Selecciona una opción",
    required: true,
    size: "small",
    options: taxRegimenKeyOptions,
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
  taxRegimeKey: Yup.number().required("Régimen Fiscal es requerido"),
  cfdiKey: Yup.string().required("CFDI es requerido"),
  taxEmail: Yup.string().email("Email invalido").required("Email es requerido"),
  taxPhone: Yup.string().required("Teléfono es requerido"),
});

const profileInitialState: InitialState = {
  name: "",
  businessName: "",
  rfc: "",
  taxZipCode: 0,
  taxRegimeKey: "none",
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
