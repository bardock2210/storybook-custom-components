// vendors
import { type FC } from "react";
import { Box, Button, FormControl, FormLabel, Grid, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEmpty, isEqual } from "lodash";

// components
import DatePickerField from "@/components/form/Elements/DatePickerField";
import PhoneField from "@/components/form/Elements/PhoneField";
import SelectField from "@/components/form/Elements/SelectField";
import TextField from "@/components/form/Elements/TextField";
import Section from "@/components/container/Section";

// types
import type { FieldValues, DeepPartial, FieldErrors, Control } from "react-hook-form";
import { ButtonProps, IFormFieldProps, IFormSectionProps } from "@/types/form";

// styles
import { gridSx, sectionContainerSx } from "./DynamicForm.styles";

interface IOption {
  columns: number;
  sections?: {
    name: string;
    title: string;
  }[];
}

export interface DynamicFormProps {
  formFields: IFormFieldProps[] | IFormSectionProps[];
  formSchema: any;
  initialState: FieldValues;
  onSubmit: (params: FieldValues) => void;
  options?: IOption;
  primaryBtnProps: ButtonProps;
  secondaryBtnProps?: ButtonProps;
}

interface FormFieldsProps {
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  formFields: IFormFieldProps[];
  options?: IOption;
}

const FormFields: FC<FormFieldsProps> = ({ control, errors, formFields, options }) => {
  const fieldTypes: Record<string, Function> = {
    date: (props: IFormFieldProps) => (
      <DatePickerField {...props} errors={errors} control={control} />
    ),
    email: (props: IFormFieldProps) => <TextField {...props} errors={errors} control={control} />,
    number: (props: IFormFieldProps) => <TextField {...props} errors={errors} control={control} />,
    password: (props: IFormFieldProps) => (
      <TextField {...props} errors={errors} control={control} />
    ),
    text: (props: IFormFieldProps) => <TextField {...props} errors={errors} control={control} />,
    phone: (props: IFormFieldProps) => <PhoneField {...props} errors={errors} control={control} />,
    select: (props: IFormFieldProps) => (
      <SelectField {...props} errors={errors} control={control} options={props.options ?? []} />
    ),
  };

  return (
    <Grid container spacing={2} sx={gridSx}>
      {formFields.map((field, index) => (
        <Grid item key={index} xs={12} md={options?.columns ? 12 / options.columns : undefined}>
          {field.type === "select" ? (
            fieldTypes[field.type](field)
          ) : (
            <FormControl
              fullWidth
              key={field.name}
              margin={index === 0 && !options?.columns ? "none" : "dense"}
            >
              <FormLabel required={field.required}>{field.label}</FormLabel>
              {fieldTypes[field.type](field)}
            </FormControl>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

const isFormSectionType = (obj: any): obj is IFormSectionProps[] =>
  Array.isArray(obj) &&
  obj.every((item) => "description" in item && "name" in item && "formFields" in item);

export const DynamicForm: FC<DynamicFormProps> = ({
  formFields,
  formSchema,
  initialState,
  onSubmit,
  options,
  primaryBtnProps: {
    disabled,
    disableBtnWhenFieldsAreEmpty,
    disableBtnWhenFieldErrorsExist,
    disableBtnWhenNoChangesMade,
    fullWidth,
    loading = false,
    label,
    sx,
    type,
    variant,
  },
  secondaryBtnProps,
}) => {
  const isSecondaryBtn = Boolean(secondaryBtnProps);
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FieldValues>({
    defaultValues: initialState as DeepPartial<FieldValues>,
    resolver: yupResolver(formSchema),
    values: initialState as DeepPartial<FieldValues>,
  });
  const formValues = watch();
  const emptyFieldsCondition = Object.values(formValues).some((value) => {
    const valueType = typeof value === "number" ? value.toString() : value;
    return isEmpty(valueType);
  });
  const fieldErrosCondition = Object.keys(errors).length > 0;
  const noFormChangesCondition = isEqual(initialState, formValues);

  return (
    <Box autoComplete="off" component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Box component="div" sx={sectionContainerSx}>
        {isFormSectionType(formFields) ? (
          formFields.map(({ description, formFields, name, sectionVarian }) => (
            <Section
              key={`section-${name}`}
              title={description}
              variant={sectionVarian ?? "outlined"}
            >
              <FormFields
                control={control}
                errors={errors}
                formFields={formFields}
                options={options}
              />
            </Section>
          ))
        ) : (
          <FormFields control={control} errors={errors} formFields={formFields} options={options} />
        )}
        <Stack direction="row" spacing={isSecondaryBtn ? 2 : undefined}>
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
            disabled={
              disabled ||
              (disableBtnWhenFieldsAreEmpty && emptyFieldsCondition) ||
              (disableBtnWhenFieldErrorsExist && fieldErrosCondition) ||
              (disableBtnWhenNoChangesMade && noFormChangesCondition)
            }
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
    </Box>
  );
};
