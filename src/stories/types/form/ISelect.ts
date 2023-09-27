import { Control, FieldErrors } from "react-hook-form";

export interface OptionProps {
  value: string | number | readonly string[];
  description: string;
}

export type TSize = "small" | "medium";

export interface SelectProps {
  control?: Control<any, any>;
  defaultValue?: any;
  errors?: FieldErrors<any>;
  helperText?: string;
  id?: string;
  isForm?: boolean;
  label?: string;
  name?: string;
  options: OptionProps[];
  placeholder?: string;
  required?: boolean;
  size?: TSize;
}
