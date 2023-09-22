import { FC } from "react";
import { Box, Button, FormControl, FormLabel, Select, Stack } from "@mui/material";
import TextInput from "@/components/form/elements/TextField";
import { useForm, type FieldValues, DeepPartial } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonProps, IFormFieldProps } from "@/types/form";

export interface DynamicFormProps {
  formFields: IFormFieldProps[];
  formSchema: any;
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
  console.log({ initialState });
  const isSecondaryBtn = Boolean(secondaryBtnProps);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    defaultValues: initialState as DeepPartial<FieldValues>,
    resolver: yupResolver(formSchema),
  });

  const getFieldByType = (props: IFormFieldProps) => {
    switch (props.type) {
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

  const renderField = (props: IFormFieldProps, index: number) => {
    const { label, required } = props;

    return (
      <FormControl fullWidth key={props.name} margin={index === 0 ? "none" : "dense"}>
        <FormLabel required={required}>{label}</FormLabel>
        {getFieldByType(props)}
      </FormControl>
    );
  };

  return (
    <Box autoComplete="off" component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {formFields.map((field, index) => renderField(field, index))}
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
