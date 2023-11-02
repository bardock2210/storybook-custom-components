import { createContext } from "react";
import type { NotificationProps } from "@/types/notification";

export interface ZipCodeInfoContextProps {
  notification: NotificationProps;
  clearNotification: () => void;
  showNotification: (configuration: NotificationProps) => void;
}

export const ZipCodeInfoContext = createContext({} as ZipCodeInfoContextProps);
