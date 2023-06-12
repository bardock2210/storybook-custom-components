import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";
import { TextInput } from "./TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextInputProps } from "@/types/form";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "ZipCodeService/Form/Elements/TextInput",
};

export default meta;
type Story = StoryObj<typeof TextInput>;

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo electronico invalido.")
    .required("El correo electronico es requerido."),
});

const TextInputFormTemplate: Story = {
  render: (args: TextInputProps) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<{ email: string }>({
      defaultValues: { email: "" },
      resolver: yupResolver(FormSchema),
    });

    const onSubmit = (data: any) => {
      console.log({ data });
    };

    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextInput {...args} control={control} errors={errors} />
        <Button fullWidth sx={{ mt: "10px" }} type="submit" variant="contained">
          Submit form
        </Button>
      </form>
    );
  },
};

export const Default: Story = {
  args: {
    label: "Text",
    name: "text",
    placeholder: "Insert a text here",
    required: true,
    size: "small",
    type: "text",
  },
};

export const FormField: Story = {
  ...TextInputFormTemplate,
  args: {
    fullWidth: true,
    isForm: true,
    label: "Email",
    name: "email",
    placeholder: "jdoe@company.com",
    required: true,
    size: "small",
    type: "email",
  },
};
