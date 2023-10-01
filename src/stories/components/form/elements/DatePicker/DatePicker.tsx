import { FC, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import { Controller } from "react-hook-form";
import { TextInputProps } from "@/types/form";

export const DatePicker: FC<TextInputProps> = ({
  control,
  defaultValue,
  errors,
  name,
  shrink = true,
  size = "small",
}) => {
  const [date, setDate] = useState<Dayjs | null>(
    defaultValue ? dayjs(defaultValue as string) : null
  );

  return (
    <Controller
      name={name || ""}
      control={control}
      defaultValue={date}
      render={({ field: { onChange, ...restField } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <MuiDatePicker
              className="datePicker"
              onChange={(event) => {
                onChange(event);
                setDate(event);
              }}
              slotProps={{
                textField: {
                  error: !!errors?.[name || ""],
                  helperText: errors?.[name || ""]?.message as string,
                  InputLabelProps: { shrink },
                  size,
                },
              }}
              {...restField}
              views={["year", "month", "day"]}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};
