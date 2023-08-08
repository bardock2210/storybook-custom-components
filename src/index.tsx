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
import NoThemeMobileMenu from "@/components/display/MobileMenu";
import NoThemeSelect from "@/components/form/elements/Select";
import NoThemeTextInput from "@/components/form/elements/TextField";
import NoThemeProfileCard from "@/components/display/ProfileCard";
import NoThemePanel from "@/components/container/Panel";

export const DynamicForm = withThemeProvider(NoThemeDynamicForm);
export const Header = withThemeProvider(NoThemeHeader);
export const MobileMenu = withThemeProvider(NoThemeMobileMenu);
export const Select = withThemeProvider(NoThemeSelect);
export const TextInput = withThemeProvider(NoThemeTextInput);
export const ProfileCard = withThemeProvider(NoThemeProfileCard);
export const Panel = withThemeProvider(NoThemePanel);

// Hooks
export { useDynamicForm } from "@/hooks/index";

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
