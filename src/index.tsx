import {
  ButtonProps,
  IFormFieldProps,
  IFormSectionProps,
  IOption,
  OptionProps,
  SelectProps,
  TField,
  TextInputProps,
} from "@/types/index";
import withThemeProvider from "./withThemeProvider";

// Components
import NoThemeAuthForm from "@/components/form/AuthForm";
import NoThemeAuthPage from "@/components/layout/AuthPage";
import NoThemeDynamicForm from "@/components/form/DynamicForm";
import NoThemeHeader from "@/components/layout/Header";
import NoThemeMobileMenu from "@/components/display/MobileMenu";
import NoThemePanel from "@/components/container/Panel";
import NoThemeProfileCard from "@/components/display/ProfileCard";
import NoThemeSelect from "@/components/form/Elements/Select";
import NoThemeTextInput from "@/components/form/Elements/TextField";
import NoThemeDatePicker from "@/components/form/Elements/DatePicker";
import NoThemePhoneInput from "@/components/form/Elements/PhoneInput";

export const AuthForm = withThemeProvider(NoThemeAuthForm);
export const AuthPage = withThemeProvider(NoThemeAuthPage);
export const DynamicForm = withThemeProvider(NoThemeDynamicForm);
export const Header = withThemeProvider(NoThemeHeader);
export const MobileMenu = withThemeProvider(NoThemeMobileMenu);
export const Panel = withThemeProvider(NoThemePanel);
export const ProfileCard = withThemeProvider(NoThemeProfileCard);
export const Select = withThemeProvider(NoThemeSelect);
export const TextInput = withThemeProvider(NoThemeTextInput);
export const DatePicker = withThemeProvider(NoThemeDatePicker);
export const PhoneInput = withThemeProvider(NoThemePhoneInput);

// Hooks
export { useDynamicForm, useResponsive } from "@/hooks/index";

// Types
export type {
  ButtonProps,
  IFormFieldProps,
  IFormSectionProps,
  IOption,
  OptionProps,
  SelectProps,
  TField,
  TextInputProps,
};

// Styles
export { createComponents, createTheme, palette } from "@/styles/index";
