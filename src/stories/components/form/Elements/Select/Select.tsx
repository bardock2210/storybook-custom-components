import { FC } from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { OptionProps, SelectProps, TSize } from "@/types/form";

interface FormControWrapperProps {
  children: JSX.Element;
  error?: boolean;
  formLabel?: string;
  fullWidth?: boolean;
  required?: boolean;
  size?: TSize;
  wrapChild: boolean;
}

const FormControWrapper = ({
  children,
  error,
  formLabel,
  fullWidth,
  required,
  size,
  wrapChild = false,
}: FormControWrapperProps) =>
  wrapChild ? (
    <FormControl error={error} fullWidth={fullWidth} margin="dense" required={required} size={size}>
      <FormLabel>{formLabel || ""}</FormLabel>
      {children}
    </FormControl>
  ) : (
    children
  );

const renderPlaceHolder = (placeholder: string) => (
  <MenuItem disabled value="none">
    {placeholder}
  </MenuItem>
);

const getOptions = (defaultValue: any, options: OptionProps[]) => {
  return options.map(({ description, value }) => (
    <MenuItem key={`menu-item-${value}`} selected={Boolean(defaultValue === value)} value={value}>
      {description}
    </MenuItem>
  ));
};

export const Select: FC<SelectProps> = ({
  control,
  defaultValue,
  errors,
  label,
  name,
  options,
  placeholder,
  ...props
}) => {
  return (
    <FormControWrapper
      error={Boolean(errors?.[name || ""])}
      formLabel={label}
      fullWidth
      required={props.required}
      size={props.size}
      wrapChild={label ? true : false}
    >
      <Controller
        control={control}
        name={name || ""}
        render={({ field: { value, ...field } }) => {
          const isInOptions = options.some((option) => option.value === value);
          return (
            <>
              <MuiSelect
                value={
                  placeholder && (value === undefined || !isInOptions)
                    ? "none"
                    : defaultValue && value === undefined
                    ? defaultValue
                    : !isInOptions
                    ? options[0].value
                    : value
                }
                {...field}
                {...props}
              >
                {placeholder && renderPlaceHolder(placeholder)}
                {getOptions(defaultValue, options)}
              </MuiSelect>
              {Boolean(errors?.[name || ""]) && (
                <FormHelperText>{`${errors?.[name || ""]?.message}`}</FormHelperText>
              )}
            </>
          );
        }}
      />
    </FormControWrapper>
  );
};
