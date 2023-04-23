import React, { FC } from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { TextInputProps } from "@/types";

export const TextInput: FC<TextInputProps> = ({
  control,
  endAdornment,
  errors,
  isForm = false,
  label,
  shrink = true,
  startAdornment,
  size = "small",
  ...props
}) => {
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
