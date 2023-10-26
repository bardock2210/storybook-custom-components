import type {
  ButtonProps,
  IFormFieldProps,
  IFormSectionProps,
  IOption,
  OptionProps,
  SelectProps,
  TField,
  TextInputProps,
} from "@/types/index";
import type { NavigationCardProps } from "@/components/display/NavigationCard/NavigationCard";
import type { NotificationBarProps } from "@/components/display/NotificationBar/NotificationBar";
import { createTheme } from "@/theme/index";
import type { CustomThemeOptions } from "@/theme/index";

const theme = createTheme();

// Components
export { default as AuthForm } from "@/components/form/AuthForm";
export { default as AuthPage } from "@/components/layout/AuthPage";
export { default as DynamicForm } from "@/components/form/DynamicForm";
export { default as Header } from "@/components/layout/Header";
export { default as Iconify } from "@/components/display/Iconify";
export { default as MobileMenu } from "@/components/display/MobileMenu";
export { default as NavigationCard } from "@/components/display/NavigationCard";
export { default as NotificationBar } from "@/components/display/NotificationBar";
export { default as Panel } from "@/components/container/Panel";
export { default as ProfileCard } from "@/components/display/ProfileCard";
export { default as Select } from "@/components/form/Elements/Select";
export { default as TextInput } from "@/components/form/Elements/TextField";
export { default as DatePicker } from "@/components/form/Elements/DatePicker";
export { default as PhoneInput } from "@/components/form/Elements/PhoneInput";

// Context
export { ComponentsProvider } from "@/context/Components";

// Hooks
export { useDynamicForm, useResponsive } from "@/hooks/index";

// Theme
export { theme };

// Types
export type {
  ButtonProps,
  CustomThemeOptions,
  NavigationCardProps,
  NotificationBarProps,
  IFormFieldProps,
  IFormSectionProps,
  IOption,
  OptionProps,
  SelectProps,
  TField,
  TextInputProps,
};
