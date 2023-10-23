import { useContext } from "react";
import { NotificationBarContext } from "@/context/Components";

export const useNotificationBar = () => {
  const context = useContext(NotificationBarContext);

  if (!context) {
    throw new Error("useCustomContext must be used within a CustomProvider");
  }

  return {
    notification: context.notification,
    showNotification: context.showNotification,
  };
};
