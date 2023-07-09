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
  id: any;
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
  required?: boolean;
  size?: TFieldSize;
  value?: any;
}
