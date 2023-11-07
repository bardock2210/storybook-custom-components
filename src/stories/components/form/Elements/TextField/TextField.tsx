import { FC } from "react";
import { TextField as TextFieldMUI } from "@mui/material";
import { Controller } from "react-hook-form";
import { TextFieldProps } from "@/types/form";
import { styles } from "./TextField.styles";

export const TextField: FC<TextFieldProps> = ({
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
        <TextFieldMUI
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
