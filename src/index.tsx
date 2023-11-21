import type {
  ButtonProps,
  IFormFieldProps,
  IFormSectionProps,
  IOption,
  SelectFieldProps,
  TField,
  TextFieldProps,
} from "@/types/index";
import type { NavigationCardProps } from "@/components/display/NavigationCard/NavigationCard";
import type { NotificationBarProps } from "@/components/display/NotificationBar/NotificationBar";
import type { SideNavProps, SideNavItemProps } from "@/components/layout/SideNav/SideNav";
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
export { default as PageContainer } from "@/components/container/PageContainer";
export { default as ProfileCard } from "@/components/display/ProfileCard";
export { default as Section } from "@/components/container/Section";
export { default as Select } from "@/components/form/Elements/SelectField";
export { default as SideNav } from "@/components/layout/SideNav";
export { default as TextField } from "@/components/form/Elements/TextField";
export { default as DatePickerField } from "@/components/form/Elements/DatePickerField";
export { default as PhoneField } from "@/components/form/Elements/PhoneField";

// Context
export { ZipCodeInfoProvider } from "@/context/ZipCodeInfo";

// Hooks
export { useNotificationBar, useResponsive } from "@/hooks/index";

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
  SelectFieldProps,
  SideNavProps,
  SideNavItemProps,
  TField,
  TextFieldProps,
};
