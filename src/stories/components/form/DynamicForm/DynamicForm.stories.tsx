import { Meta, StoryObj } from "@storybook/react";
import * as Yup from "yup";
import { DynamicForm } from "./DynamicForm";
import { IFormFieldProps, IFormSectionProps } from "@/types/form";

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

export interface InitialState {
  name: string;
  businessName: string;
  rfc: string;
  taxZipCode: number;
  taxRegimeKey: "none" | number;
  cfdiKey: number;
  taxEmail: string;
  taxPhone: string;
}

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
  {
    label: "Birth Date",
    name: "birthDate",
    type: "date",
    id: "birthDate",
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
  birthDate: Yup.string().required("Fecha de nacimiento requerida"),
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
    type: "select",
    id: "taxRegimeKey",
    placeholder: "Selecciona una opción",
    required: true,
    size: "small",
    options: [
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
    ],
  },
  {
    label: "CFDI",
    name: "cfdiKey",
    placeholder: "Selecciona una opción",
    type: "select",
    id: "cfdiKey",
    options: [
      { value: "G01", description: "G01 - Adquisición de mercancías." },
      {
        value: "G02",
        description: "G02 - Devoluciones, descuentos o bonificaciones.",
      },
      { value: "G03", description: "G03 - Gastos en general." },
      { value: "I01", description: "I01 - Construcciones." },
      {
        value: "I02",
        description: "I02 - Mobiliario y equipo de oficina por inversiones.",
      },
      { value: "I03", description: "I03 - Equipo de transporte." },
      {
        value: "I04",
        description: "I04 - Equipo de computo y accesorios.",
      },
      {
        value: "I05",
        description: "I05 - Dados, troqueles, moldes, matrices y herramental.",
      },
      { value: "I06", description: "I06 - Comunicaciones telefónicas." },
      { value: "I07", description: "I07 - Comunicaciones satelitales." },
      { value: "I08", description: "I08 - Otra maquinaria y equipo." },
      {
        value: "D01",
        description: "D01 - Honorarios médicos, dentales y gastos hospitalarios.",
      },
      {
        value: "D02",
        description: "D02 - Gastos médicos por incapacidad o discapacidad.",
      },
      { value: "D03", description: "D03 - Gastos funerales." },
      { value: "D04", description: "D04 - Donativos." },
      {
        value: "D05",
        description:
          "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)",
      },
      {
        value: "D06",
        description: "D06 - Aportaciones voluntarias al SAR.",
      },
      {
        value: "D07",
        description: "D07 - Primas por seguros de gastos médicos.",
      },
      {
        value: "D08",
        description: "D08 - Gastos de transportación escolar obligatoria.",
      },
      {
        value: "D09",
        description:
          "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones.",
      },
      {
        value: "D10",
        description: "D10 - Pagos por servicios educativos (colegiaturas)",
      },
      { value: "S01", description: "S01 - Sin efectos fiscales." },
      { value: "CP01", description: "CP01 - Pagos" },
      { value: "CN01", description: "CN01 - Nómina" },
    ],
    required: true,
    size: "small",
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
    type: "phone",
    id: "taxPhone",
    required: true,
  },
];

const profileFormFieldsWithSections: IFormSectionProps[] = [
  {
    description: "Datos Fiscales",
    name: "taxinfo",
    fields: [
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
        label: "Clave Regimen Fiscal",
        name: "taxRegimeKey",
        type: "select",
        id: "taxRegimeKey",
        placeholder: "Selecciona una opción",
        required: true,
        size: "small",
        options: [
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
            description:
              "610 - Residentes en el Extranjero sin Establecimiento Permanente en México",
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
        ],
      },
      {
        label: "CFDI",
        name: "cfdiKey",
        placeholder: "Selecciona una opción",
        type: "select",
        id: "cfdiKey",
        options: [
          { value: "G01", description: "G01 - Adquisición de mercancías." },
          {
            value: "G02",
            description: "G02 - Devoluciones, descuentos o bonificaciones.",
          },
          { value: "G03", description: "G03 - Gastos en general." },
          { value: "I01", description: "I01 - Construcciones." },
          {
            value: "I02",
            description: "I02 - Mobiliario y equipo de oficina por inversiones.",
          },
          { value: "I03", description: "I03 - Equipo de transporte." },
          {
            value: "I04",
            description: "I04 - Equipo de computo y accesorios.",
          },
          {
            value: "I05",
            description: "I05 - Dados, troqueles, moldes, matrices y herramental.",
          },
          { value: "I06", description: "I06 - Comunicaciones telefónicas." },
          { value: "I07", description: "I07 - Comunicaciones satelitales." },
          { value: "I08", description: "I08 - Otra maquinaria y equipo." },
          {
            value: "D01",
            description: "D01 - Honorarios médicos, dentales y gastos hospitalarios.",
          },
          {
            value: "D02",
            description: "D02 - Gastos médicos por incapacidad o discapacidad.",
          },
          { value: "D03", description: "D03 - Gastos funerales." },
          { value: "D04", description: "D04 - Donativos." },
          {
            value: "D05",
            description:
              "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)",
          },
          {
            value: "D06",
            description: "D06 - Aportaciones voluntarias al SAR.",
          },
          {
            value: "D07",
            description: "D07 - Primas por seguros de gastos médicos.",
          },
          {
            value: "D08",
            description: "D08 - Gastos de transportación escolar obligatoria.",
          },
          {
            value: "D09",
            description:
              "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones.",
          },
          {
            value: "D10",
            description: "D10 - Pagos por servicios educativos (colegiaturas)",
          },
          { value: "S01", description: "S01 - Sin efectos fiscales." },
          { value: "CP01", description: "CP01 - Pagos" },
          { value: "CN01", description: "CN01 - Nómina" },
        ],
        required: true,
        size: "small",
      },
    ],
  },
  {
    description: "Datos De Contacto",
    name: "contactinfo",
    fields: [
      {
        label: "CP de Dirección Fiscal",
        name: "taxZipCode",
        type: "number",
        id: "taxZipCode",
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
        type: "phone",
        id: "taxPhone",
        required: true,
      },
    ],
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
  name: "Bardock Ozaru",
  businessName: "Bardock Ozaru",
  rfc: "OZBA452589G456",
  taxZipCode: 54000,
  taxRegimeKey: "none",
  cfdiKey: 13,
  taxEmail: "bardock_ozaru@gmail.com",
  taxPhone: "525580589740",
};

const meta: Meta<typeof DynamicForm> = {
  component: DynamicForm,
  title: "ZipCodeService/Form/DynamicForm",
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
    return <DynamicForm {...args} initialState={profileInitialState} />;
  },
};

export const Login: Story = {
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

export const Register: Story = {
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
  },
};

export const Profile: Story = {
  ...ProfileDynamicFormTemplate,
  args: {
    formFields: profileFormFields,
    formSchema: profileFormSchema,
    initialState: profileInitialState,
    onSubmit: (params) => console.log("Submit form: ", { params }),
    options: { columns: 2 },
    primaryBtnProps: {
      fullWidth: true,
      label: "Guardar",
      type: "submit",
      variant: "contained",
    },
  },
};

export const ProfileWithSections: Story = {
  ...ProfileDynamicFormTemplate,
  args: {
    formFields: profileFormFieldsWithSections,
    formSchema: profileFormSchema,
    initialState: profileInitialState,
    onSubmit: (params) => console.log("Submit form: ", { params }),
    options: { columns: 2 },
    primaryBtnProps: {
      fullWidth: true,
      label: "Guardar",
      type: "submit",
      variant: "contained",
    },
  },
};
