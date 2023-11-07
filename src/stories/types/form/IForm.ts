// types
import type { ReactNode } from "react";
import type { SxProps, TextFieldProps as TextFieldMUIProps, Theme } from "@mui/material";
import type { Control, FieldErrors } from "react-hook-form";

export type TField =
  | "date"
  | "email"
  | "file"
  | "number"
  | "password"
  | "phone"
  | "radio"
  | "select"
  | "switch"
  | "text";

export type TFieldSize = "medium" | "small";

export type TSize = "small" | "medium";

export interface IOption {
  description: string;
  value: string | number | readonly string[];
}

export interface IFormFieldProps {
  defaultValue?: any;
  endAdorment?: ReactNode;
  id?: string;
  label: string;
  name: string;
  options?: IOption[];
  placeholder?: string;
  required?: boolean;
  size?: TFieldSize;
  type: TField;
  value?: any;
}

export type TextFieldProps = TextFieldMUIProps & {
  control?: Control<any, any>;
  endAdornment?: ReactNode;
  errors?: FieldErrors;
  isForm?: boolean;
  shrink?: boolean;
  startAdornment?: ReactNode;
};

export interface SelectFieldProps {
  control?: Control<any, any>;
  defaultValue?: any;
  errors?: FieldErrors<any>;
  helperText?: string;
  id?: string;
  isForm?: boolean;
  label?: string;
  name?: string;
  options: IOption[];
  placeholder?: string;
  required?: boolean;
  size?: TSize;
}

export interface IFormSectionProps {
  description: string;
  name: string;
  fields: IFormFieldProps[];
}

export interface ButtonProps {
  disabled?: boolean;
  disableBtnWhenFieldsAreEmpty?: boolean;
  disableBtnWhenFieldErrorsExist?: boolean;
  disableBtnWhenNoChangesMade?: boolean;
  fullWidth?: boolean;
  label: string;
  loading?: boolean;
  sx?: SxProps<Theme>;
  type: "button" | "reset" | "submit";
  variant: "contained" | "outlined" | "text";
}
