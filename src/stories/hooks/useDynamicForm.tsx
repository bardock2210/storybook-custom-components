import { FormControl, FormLabel, Select } from "@mui/material";
import TextInput from "@/components/form/Elements/TextField";
import { useForm } from "react-hook-form";
import { DeepPartial, FieldValues, UseFormHandleSubmit } from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObject, ObjectSchema } from "yup";
import { IFormFieldProps, TField } from "../types";

export function useDynamicForm<T extends FieldValues>(
  initValues: T,
  formSchema: ObjectSchema<any, AnyObject>
): {
  RenderField: (type: TField, props: IFormFieldProps) => JSX.Element;
  handleSubmit: UseFormHandleSubmit<T>;
} {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<T>({
    defaultValues: initValues as DeepPartial<T>,
    resolver: yupResolver(formSchema),
  });

  const formFieldType = (type: TField, props: IFormFieldProps) => {
    switch (type) {
      case "email":
      case "number":
      case "password":
      case "text":
        return <TextInput {...props} control={control} errors={errors} isForm />;
      case "select":
        return <Select {...props} />;
      default:
        return null;
    }
  };

  const RenderField = (type: TField, props: IFormFieldProps) => {
    const { label, required } = props;

    return (
      <FormControl fullWidth key={props.name}>
        <FormLabel required={required}>{label}</FormLabel>
        {formFieldType(type, props)}
      </FormControl>
    );
  };

  return { RenderField, handleSubmit };
}
