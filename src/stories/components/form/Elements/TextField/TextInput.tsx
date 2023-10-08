import { FC } from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { TextInputProps } from "@/types/form";
import { styles } from "./TextInput.styles";

export const TextInput: FC<TextInputProps> = ({
  control,
  endAdornment,
  errors,
  label,
  shrink = true,
  startAdornment,
  size = "small",
  ...props
}) => {
  const textInputStyles = [...(Array.isArray(props.sx) ? props.sx : [props.sx]), { ...styles }];
  const commonTextFieldProps = {
    InputProps: {
      endAdornment,
      startAdornment,
    },
    size,
    sx: textInputStyles,
  };

  return (
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
  );
};
