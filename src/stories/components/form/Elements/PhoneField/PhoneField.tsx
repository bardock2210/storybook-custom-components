// vendors
import { useState } from "react";
import { Controller } from "react-hook-form";
import MuiPhoneNumber from "material-ui-phone-number-2";

// types
import type { FC } from "react";
import type { MuiPhoneNumberProps } from "material-ui-phone-number-2";
import { TextFieldProps } from "@/types/form";

export type PhoneFieldProps = TextFieldProps & Omit<MuiPhoneNumberProps, "onChange">;

export const PhoneField: FC<PhoneFieldProps> = ({
  control,
  defaultCountry = "mx",
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
          defaultCountry={defaultCountry}
          error={!!errors?.[props.name || ""]}
          helperText={errors?.[props.name || ""]?.message as string}
          InputLabelProps={{ shrink }}
          onChange={(value: any) => {
            onChange(value);
            setPhoneValue(value);
          }}
          onlyCountries={["mx"]} // TODO: Only Mexico country is selected for now
          size={size}
          variant="outlined"
        />
      )}
    />
  );
};
