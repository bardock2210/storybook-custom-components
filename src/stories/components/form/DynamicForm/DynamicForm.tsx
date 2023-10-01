import { FC } from "react";
import { Box, Button, FormControl, FormLabel, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import DatePicker from "@/components/form/elements/DatePicker";
import Select from "@/components/form/elements/Select";
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
  primaryBtnProps: { disabled, fullWidth, loading = false, label, sx, type, variant },
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
    values: initialState as DeepPartial<FieldValues>,
  });

  const getFieldByType = (props: IFormFieldProps) => {
    switch (props.type) {
      case "date":
        return <DatePicker {...props} errors={errors} control={control} />;
      case "email":
      case "number":
      case "password":
      case "text":
        return <TextInput {...props} errors={errors} control={control} isForm />;
      case "phone":
        return <div></div>;
      case "select":
        return (
          <Select
            {...props}
            errors={errors}
            control={control}
            isForm
            options={props.options ?? []}
          />
        );
      default:
        return null;
    }
  };

  const renderField = (props: IFormFieldProps, index: number) => {
    const { label, required, type } = props;

    return type === "select" ? (
      getFieldByType(props)
    ) : (
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
        <LoadingButton
          color="primary"
          disabled={disabled}
          fullWidth={fullWidth}
          loading={loading}
          sx={sx}
          type={type}
          variant={variant}
        >
          {label}
        </LoadingButton>
      </Stack>
    </Box>
  );
};
