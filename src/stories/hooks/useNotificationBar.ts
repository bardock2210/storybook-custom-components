// vendors
import { useContext } from "react";

// context
import { ZipCodeInfoContext } from "../context";

export const useNotificationBar = () => {
  const context = useContext(ZipCodeInfoContext);

  if (!context) {
    throw new Error("useCustomContext must be used within a CustomProvider");
  }

  return context;
};
