import { FC } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Stack,
  type SxProps,
  type Theme,
} from "@mui/material";
import TextInput from "@/components/form/elements/TextField";
import { useForm, type FieldValues, DeepPartial } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { AnyObject, ObjectSchema } from "yup";
import { IFormFieldProps, TField } from "@/types/form";

interface ButtonProps {
  fullWidth?: boolean;
  label: string;
  sx?: SxProps<Theme>;
  type: "button" | "reset" | "submit";
  variant: "contained" | "outlined" | "text";
}

export interface DynamicFormProps {
  formFields: IFormFieldProps[];
  formSchema: ObjectSchema<any, AnyObject, any, "">;
  initialState: FieldValues;
  onSubmit: (params: FieldValues) => void;
  primaryBtnProps: ButtonProps;
  secondaryBtnProps?: ButtonProps;
}

export const DynamicForm: FC<DynamicFormProps> = ({
  formFields,
  formSchema,
  initialState,
  onSubmit,
  primaryBtnProps: { fullWidth, label, sx, type, variant },
  secondaryBtnProps,
}) => {
  const isSecondaryBtn = Boolean(secondaryBtnProps);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: initialState as DeepPartial<FieldValues>,
    resolver: yupResolver(formSchema),
  });

  const getFieldByType = (type: TField, props: IFormFieldProps) => {
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

  const renderField = (type: TField, props: IFormFieldProps) => {
    const { label, required } = props;

    return (
      <FormControl fullWidth key={props.name} margin="dense">
        <FormLabel required={required}>{label}</FormLabel>
        {getFieldByType(type, props)}
      </FormControl>
    );
  };

  return (
    <Box
      autoComplete="off"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      {formFields.map((field) => renderField(field.type, field))}
      <Stack direction="row" marginTop={3} spacing={isSecondaryBtn ? 2 : undefined}>
        {isSecondaryBtn && (
          <Button
            color="error"
            fullWidth={secondaryBtnProps?.fullWidth}
            sx={secondaryBtnProps?.sx}
            type={secondaryBtnProps?.type}
            variant={secondaryBtnProps?.variant}
          >
            {secondaryBtnProps?.label}
          </Button>
        )}
        <Button color="primary" fullWidth={fullWidth} sx={sx} type={type} variant={variant}>
          {label}
        </Button>
      </Stack>
    </Box>
  );
};
