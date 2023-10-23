import { useContext } from "react";
import { ComponentsContext } from "@/context/Components";

export const useNotificationBar = () => {
  const context = useContext(ComponentsContext);

  if (!context) {
    throw new Error("useCustomContext must be used within a CustomProvider");
  }

  return {
    notification: context.notification,
    showNotification: context.showNotification,
  };
};
