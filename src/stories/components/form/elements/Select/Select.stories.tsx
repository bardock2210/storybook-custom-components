import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";
import { Select } from "./Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { OptionProps, SelectProps } from "@/types/form";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "ZipCodeService/Form/Elements/Select",
};

export default meta;
type Story = StoryObj<typeof Select>;

const FormSchema = Yup.object().shape({
  option: Yup.string()
    .oneOf(["1", "2", "3"], "Debes seleccionar una opcion.")
    .required("Debes seleccionar una opcion."),
});

const SELECT_OPTIONS: OptionProps[] = [
  { description: "Option 1", value: "1" },
  { description: "Option 2", value: "2" },
  { description: "Option 3", value: "3" },
];

const SelectFormTemplate: Story = {
  render: (args: SelectProps) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<{ option: string }>({
      defaultValues: { option: "none" },
      resolver: yupResolver(FormSchema),
    });

    const onSubmit = (data: any) => {
      console.log({ data });
    };

    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Select {...args} control={control} errors={errors} />
        <Button fullWidth sx={{ mt: "10px" }} type="submit" variant="contained">
          Submit form
        </Button>
      </form>
    );
  },
};

export const Default: Story = {
  args: {
    defaultValue: "",
    label: "Options",
    name: "option",
    options: SELECT_OPTIONS,
    placeholder: "Select an option",
    size: "small",
  },
};

export const FormField: Story = {
  ...SelectFormTemplate,
  args: {
    isForm: true,
    label: "Options",
    name: "option",
    options: SELECT_OPTIONS,
    placeholder: "Select an option",
    required: true,
    size: "small",
  },
};
