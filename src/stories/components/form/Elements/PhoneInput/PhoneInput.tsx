import { FC, useState } from "react";
import { Controller } from "react-hook-form";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { TextInputProps } from "@/types/form";

export const PhoneInput: FC<TextInputProps> = ({
  control,
  endAdornment,
  errors,
  label,
  shrink = true,
  startAdornment,
  size = "small",
  ...props
}) => {
  const [phoneValue, setPhoneValue] = useState();

  return (
    <Controller
      defaultValue={phoneValue}
      control={control}
      name={props.name || ""}
      render={({ field: { onChange, ...restField } }) => (
        <MuiPhoneNumber
          {...restField}
          {...props}
          defaultCountry="mx"
          error={!!errors?.[props.name || ""]}
          helperText={errors?.[props.name || ""]?.message as string}
          InputLabelProps={{ shrink }}
          onChange={(value: any) => {
            onChange(value);
            setPhoneValue(value);
          }}
          size={size}
          variant="outlined"
        />
      )}
    />
  );
};
