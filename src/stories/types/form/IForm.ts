import type { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export type TField =
  | "text"
  | "email"
  | "select"
  | "radio"
  | "number"
  | "switch"
  | "date"
  | "file"
  | "password";

export type TFieldSize = "small" | "medium";

export interface IOption {
  value: string | number | readonly string[];
  description: string;
}

export interface IFormFieldProps {
  label: string;
  name: string;
  type: TField;
  defaultValue?: any;
  endAdorment?: ReactNode;
  id?: string;
  options?: IOption[];
  placeholder?: string;
  required?: boolean;
  size?: TFieldSize;
  value?: any;
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
