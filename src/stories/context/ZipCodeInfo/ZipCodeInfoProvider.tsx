import { useReducer } from "react";
import { ThemeProvider, type Theme } from "@mui/material";
import { ZipCodeInfoContext, zipCodeInfoReducer } from ".";

import type { FC, PropsWithChildren } from "react";
import type { NotificationProps } from "@/types/notification";

export interface ZipCodeInfoState {
  notification: NotificationProps;
}

export const initialState: ZipCodeInfoState = {
  notification: {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    message: "",
    open: false,
    severity: "success",
    title: "",
    variant: "outlined",
  },
};

export interface ZipCodeInfoProviderProps {
  children: React.ReactNode;
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

export const ZipCodeInfoProvider: FC<PropsWithChildren<ZipCodeInfoProviderProps>> = ({
  children,
  theme,
}) => {
  const [state, dispatch] = useReducer(zipCodeInfoReducer, initialState);

  const showNotification = (notification: NotificationProps) => {
    dispatch({ type: "ADD_NOTIFICATION", payload: notification });
  };

  const clearNotification = () => {
    dispatch({ type: "CLEAR_NOTIFICATION", payload: initialState.notification });
  };

  return (
    <ThemeProvider theme={theme}>
      <ZipCodeInfoContext.Provider value={{ ...state, clearNotification, showNotification }}>
        {children}
      </ZipCodeInfoContext.Provider>
    </ThemeProvider>
  );
};
