import { createContext } from "react";
import type { NotificationProps } from "@/types/notification";

export interface ComponentsContextProps {
  notification: NotificationProps;
  clearNotification: () => void;
  showNotification: (configuration: NotificationProps) => void;
}

export const ComponentsContext = createContext({} as ComponentsContextProps);
