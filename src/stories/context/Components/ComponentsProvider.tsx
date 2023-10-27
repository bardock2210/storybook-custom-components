import { useContext, useReducer } from "react";
import { ThemeProvider, type Theme } from "@mui/material";
import { ComponentsContext, componentsReducer } from ".";

import type { FC, PropsWithChildren } from "react";
import type { NotificationProps } from "@/types/notification";
// import { DefaultTheme } from "@material-ui/styles";

export interface ComponentsState {
  notification: NotificationProps;
}

export const initialState: ComponentsState = {
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

export interface ComponentsProviderProps {
  children: React.ReactNode;
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

export const ComponentsProvider: FC<PropsWithChildren<ComponentsProviderProps>> = ({
  children,
  theme,
}) => {
  const [state, dispatch] = useReducer(componentsReducer, initialState);

  const showNotification = (notification: NotificationProps) => {
    dispatch({ type: "ADD_NOTIFICATION", payload: notification });
  };

  const clearNotification = () => {
    dispatch({ type: "CLEAR_NOTIFICATION", payload: initialState.notification });
  };

  return (
    <ThemeProvider theme={theme}>
      <ComponentsContext.Provider value={{ ...state, clearNotification, showNotification }}>
        {children}
      </ComponentsContext.Provider>
    </ThemeProvider>
  );
};

export const useNotificationBar = () => {
  const context = useContext(ComponentsContext);

  if (!context) {
    throw new Error("useCustomContext must be used within a CustomProvider");
  }

  return context;
};
