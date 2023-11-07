import { type FC } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormLabel,
  Grid,
  Stack,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import DatePickerField from "@/components/form/Elements/DatePickerField";
import PhoneField from "@/components/form/Elements/PhoneField";
import SelectField from "@/components/form/Elements/SelectField";
import TextField from "@/components/form/Elements/TextField";
import { useForm, type FieldValues, DeepPartial } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonProps, IFormFieldProps, IFormSectionProps } from "@/types/form";
import { gridSx, sectionContainerSx } from "./DynamicForm.styles";
import { isEmpty, isEqual } from "lodash";

export interface DynamicFormProps {
  formFields: IFormFieldProps[] | IFormSectionProps[];
  formSchema: any;
  initialState: FieldValues;
  onSubmit: (params: FieldValues) => void;
  options?: {
    columns: number;
    sections?: {
      name: string;
      title: string;
    }[];
  };
  primaryBtnProps: ButtonProps;
  secondaryBtnProps?: ButtonProps;
}

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

  const renderDatePicker = (props: IFormFieldProps) => (
    <DatePickerField {...props} errors={errors} control={control} />
  );

  const renderPhoneField = (props: IFormFieldProps) => (
    <PhoneField {...props} errors={errors} control={control} />
  );

  const renderSelect = (props: IFormFieldProps) => (
    <SelectField {...props} errors={errors} control={control} options={props.options ?? []} />
  );

  const renderTextInput = (props: IFormFieldProps) => (
    <TextField {...props} errors={errors} control={control} />
  );

  const fields: Record<string, (props: IFormFieldProps) => JSX.Element> = {
    date: renderDatePicker,
    email: renderTextInput,
    number: renderTextInput,
    password: renderTextInput,
    text: renderTextInput,
    phone: renderPhoneField,
    select: renderSelect,
  };

  const renderFormFields = (formFields: IFormFieldProps[]) => {
    return (
      <Grid container spacing={2} sx={gridSx}>
        {formFields.map((field, index) => (
          <Grid item key={index} xs={12} md={options?.columns ? 12 / options.columns : undefined}>
            {field.type === "select" ? (
              fields[field.type](field)
            ) : (
              <FormControl
                fullWidth
                key={field.name}
                margin={index === 0 && !options?.columns ? "none" : "dense"}
              >
                <FormLabel required={field.required}>{field.label}</FormLabel>
                {fields[field.type](field)}
              </FormControl>
            )}
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderFormSection = (formSections: IFormSectionProps[]) => {
    return (
      <Box component="div" sx={sectionContainerSx}>
        {formSections.map(({ description, name, fields }: IFormSectionProps, index) => (
          <Card className={index !== 0 ? "no-first-section" : undefined} key={`section-${name}`}>
            <CardHeader title={description} />
            <CardContent>{renderFormFields(fields)}</CardContent>
          </Card>
        ))}
      </Box>
    );
  };

  const isAFormSectionsType = (obj: any): obj is IFormSectionProps[] => {
    return (
      Array.isArray(obj) &&
      obj.every((item) => "description" in item && "name" in item && "fields" in item)
    );
  };

  return (
    <Box autoComplete="off" component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {isAFormSectionsType(formFields)
        ? renderFormSection(formFields)
        : renderFormFields(formFields)}
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
  );
};
