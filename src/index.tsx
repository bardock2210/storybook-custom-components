import {
  ButtonProps,
  IFormFieldProps,
  IOption,
  OptionProps,
  SelectProps,
  TField,
  TextInputProps,
} from "@/types/index";
import withThemeProvider from "./withThemeProvider";

// Components
import NoThemeDynamicForm from "@/components/form/DynamicForm";
import NoThemeHeader from "@/components/layout/Header";
import NoThemeLogin from "@/components/layout/Form/Login";
import NoThemeMobileMenu from "@/components/display/MobileMenu";
import NoThemePanel from "@/components/container/Panel";
import NoThemeProfileCard from "@/components/display/ProfileCard";
import NoThemeSelect from "@/components/form/elements/Select";
import NoThemeTextInput from "@/components/form/elements/TextField";

export const DynamicForm = withThemeProvider(NoThemeDynamicForm);
export const Header = withThemeProvider(NoThemeHeader);
export const Login = withThemeProvider(NoThemeLogin);
export const MobileMenu = withThemeProvider(NoThemeMobileMenu);
export const Panel = withThemeProvider(NoThemePanel);
export const ProfileCard = withThemeProvider(NoThemeProfileCard);
export const Select = withThemeProvider(NoThemeSelect);
export const TextInput = withThemeProvider(NoThemeTextInput);

// Hooks
export { useDynamicForm, useResponsive } from "@/hooks/index";

// Types
export type {
  ButtonProps,
  IFormFieldProps,
  IOption,
  OptionProps,
  SelectProps,
  TField,
  TextInputProps,
};

// Styles
export { createComponents, createTheme, palette } from "@/styles/index";
