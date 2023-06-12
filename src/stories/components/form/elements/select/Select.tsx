import React, { FC } from "react";
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
    <FormControl error={error} fullWidth={fullWidth} required={required} size={size}>
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
    <MenuItem key={value} selected={Boolean(defaultValue === value)} value={value}>
      {description}
    </MenuItem>
  ));
};

export const Select: FC<SelectProps> = ({
  control,
  defaultValue,
  errors,
  isForm,
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
      {isForm ? (
        <Controller
          control={control}
          name={name || ""}
          render={({ field: { value, ...field } }) => (
            <>
              <MuiSelect
                value={
                  placeholder && value === undefined
                    ? "none"
                    : defaultValue && value === undefined
                    ? defaultValue
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
          )}
        />
      ) : (
        <MuiSelect {...props} defaultValue={placeholder && "none"}>
          {placeholder && renderPlaceHolder(placeholder)}
          {getOptions(defaultValue, options)}
        </MuiSelect>
      )}
    </FormControWrapper>
  );
};
