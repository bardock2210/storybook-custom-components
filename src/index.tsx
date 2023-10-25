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
import { CustomThemeOptions } from "@/styles/theme";

// Components
import NoThemeAuthForm from "@/components/form/AuthForm";
import NoThemeAuthPage from "@/components/layout/AuthPage";
import NoThemeDynamicForm from "@/components/form/DynamicForm";
import NoThemeHeader from "@/components/layout/Header";
import NoThemeIconify from "@/components/display/Iconify";
import NoThemeMobileMenu from "@/components/display/MobileMenu";
import NoThemeNavigationCard from "@/components/display/NavigationCard";
import NoThemeNotificationBar from "@/components/display/NotificationBar";
import NoThemePanel from "@/components/container/Panel";
import NoThemeProfileCard from "@/components/display/ProfileCard";
import NoThemeSelect from "@/components/form/Elements/Select";
import NoThemeTextInput from "@/components/form/Elements/TextField";
import NoThemeDatePicker from "@/components/form/Elements/DatePicker";
import NoThemePhoneInput from "@/components/form/Elements/PhoneInput";

export { NoThemeAuthForm as AuthForm };
export { NoThemeAuthPage as AuthPage };
export { NoThemeDynamicForm as DynamicForm };
export { NoThemeHeader as Header };
export { NoThemeIconify as Iconify };
export { NoThemeMobileMenu as MobileMenu };
export { NoThemeNavigationCard as NavigationCard };
export { NoThemeNotificationBar as NotificationBar };
export { NoThemePanel as Panel };
export { NoThemeProfileCard as ProfileCard };
export { NoThemeSelect as Select };
export { NoThemeTextInput as TextInput };
export { NoThemeDatePicker as DatePicker };
export { NoThemePhoneInput as PhoneInput };

// Context
export { ComponentsProvider } from "@/context/Components";

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
  CustomThemeOptions,
};

// Styles
export { createComponents, createTheme, palette, shadows, typography } from "@/styles/index";
