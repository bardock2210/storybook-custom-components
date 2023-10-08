import type { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

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

export interface IFormSectionProps {
  description: string;
  name: string;
  fields: IFormFieldProps[];
}

export interface ButtonProps {
  disabled?: boolean;
  fullWidth?: boolean;
  label: string;
  loading?: boolean;
  sx?: SxProps<Theme>;
  type: "button" | "reset" | "submit";
  variant: "contained" | "outlined" | "text";
}
