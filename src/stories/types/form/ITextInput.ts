import { ReactNode } from "react";
import { TextFieldProps } from "@mui/material";
import { Control, FieldErrors } from "react-hook-form";

export type TextInputProps = TextFieldProps & {
  control?: Control<any, any>;
  endAdornment?: ReactNode;
  errors?: FieldErrors;
  isForm?: boolean;
  shrink?: boolean;
  startAdornment?: ReactNode;
};
