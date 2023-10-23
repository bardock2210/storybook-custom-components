import { SyntheticEvent } from "react";
import type { AlertColor, SnackbarCloseReason, SnackbarOrigin } from "@mui/material";

export interface NotificationProps {
  actionHandler?: (isOpen: boolean) => void;
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number | null;
  message?: string;
  onClose?: (event: Event | SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void;
  open?: boolean;
  severity?: AlertColor;
  title?: string;
  variant?: "standard" | "filled" | "outlined";
}
