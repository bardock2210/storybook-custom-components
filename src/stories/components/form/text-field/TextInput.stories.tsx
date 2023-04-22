import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "ZipCode Service/TextInput",
};

export default meta;
type Story = StoryObj<typeof TextInput>;

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo electronico invalido.")
    .required("El correo electronico es requerido."),
});

const FormTemplate: Story = {
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
  ...FormTemplate,
  args: {
    isForm: true,
    label: "Email",
    name: "email",
    placeholder: "jdoe@company.com",
    required: true,
    size: "small",
    type: "email",
  },
};
