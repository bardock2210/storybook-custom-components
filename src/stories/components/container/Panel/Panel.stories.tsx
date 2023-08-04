import { Meta, StoryObj } from "@storybook/react";
import { Grid } from "@mui/material";
import { Panel } from "./Panel";
import DynamicForm from "@/components/form/DynamicForm";
import { ProfileCard, type UserInfoProps } from "@/components/display/ProfileCard/ProfileCard";
import { IFormFieldProps } from "@/types/form";
import * as Yup from "yup";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";

const REGISTRATION_INITIAL_STATE = {
  email: "",
  password: "",
  businessName: "",
  cfdi: "",
  name: "",
  phone: "",
  rfc: "",
  taxRegimeKey: "",
  zipCode: "",
};

const REGISTRATION_FORM_DATA: IFormFieldProps[] = [
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
    name: "zipCode",
    type: "number",
    id: "zipCode",
    required: true,
  },
  {
    label: "CFDI",
    name: "cfdi",
    type: "number",
    id: "cfdi",
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
    type: "text",
    id: "phone",
    required: true,
  },
];

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required("Nombre es requerido"),
  businessName: Yup.string().required("Razón Social es requerida"),
  rfc: Yup.string().required("RFC es requerido"),
  zipCode: Yup.string().required("CP es requerido"),
  taxRegimeKey: Yup.string().required("Régimen Fiscal es requerido"),
  cfdi: Yup.string().required("CFDI es requerido"),
  email: Yup.string().email("Email invalido").required("Email es requerido"),
  phone: Yup.string().required("Teléfono es requerido"),
});

const userInfo: UserInfoProps[] = [
  {
    icon: <MailOutlineIcon fontSize="small" />,
    info: "joe.d@domain.com",
  },
  {
    icon: <ContactPhoneOutlinedIcon fontSize="small" />,
    info: "5578963256",
  },
];

const meta: Meta<typeof Panel> = {
  component: Panel,
  title: "ZipCodeService/Container/Panel",
};

export default meta;
type Story = StoryObj<typeof Panel>;

const DefaultPanelTemplate: Story = {
  render: (args) => {
    return <Panel {...args} />;
  },
};

export const Default: Story = {
  ...DefaultPanelTemplate,
  args: {
    body: <div>Perfil</div>,
    title: "Perfil",
  },
};

export const Perfil: Story = {
  ...DefaultPanelTemplate,
  args: {
    body: (
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ProfileCard imageUrl={""} name={"Arturo Mellado"} userInfo={userInfo} />
        </Grid>
        <Grid item xs={12} md={8}>
          <DynamicForm
            formFields={REGISTRATION_FORM_DATA}
            formSchema={RegistrationSchema}
            initialState={REGISTRATION_INITIAL_STATE}
            onSubmit={() => console.log("Function not implemented.")}
            primaryBtnProps={{
              fullWidth: true,
              label: "Guardar",
              type: "submit",
              variant: "contained",
            }}
          />
        </Grid>
      </Grid>
    ),
    title: "Perfil",
  },
};
