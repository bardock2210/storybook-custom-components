import React, { ReactNode } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";

export type TextInputProps = TextFieldProps & {
  control?: Control<any, any>;
  endAdornment?: ReactNode;
  errors?: FieldErrors;
  isForm?: boolean;
  shrink?: boolean;
  startAdornment?: ReactNode;
};

export const TextInput = ({
  control,
  endAdornment,
  errors,
  isForm = false,
  label,
  shrink = true,
  startAdornment,
  size = "small",
  ...props
}: TextInputProps) => {
  const inputLabelProps = shrink && { shrink };
  const textInputStyles = [...(Array.isArray(props.sx) ? props.sx : [props.sx])];
  const commonTextFieldProps = {
    InputProps: {
      endAdornment,
      startAdornment,
    },
    size,
    sx: textInputStyles,
  };

  return isForm ? (
    <Controller
      control={control}
      name={props.name || ""}
      render={({ field }) => (
        <TextField
          error={!!errors?.[props.name || ""]}
          helperText={errors?.[props.name || ""]?.message as string}
          InputLabelProps={{ shrink }}
          {...field}
          {...props}
          {...commonTextFieldProps}
        />
      )}
    />
  ) : (
    <TextField InputLabelProps={{ shrink }} {...props} {...commonTextFieldProps} />
  );
};
