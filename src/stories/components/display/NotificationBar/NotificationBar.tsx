import { FC, SyntheticEvent, useEffect, useState } from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import type { SxProps } from "@mui/material";
import { useNotificationBar } from "@/context/Components";
import { Theme } from "@material-ui/core";
import { snackBarSx } from "./notificationBarStyles";
import { NotificationProps } from "@/types/notification";

export interface NotificationBarProps {
  config?: NotificationProps;
  sx?: SxProps<Theme>;
}

export const NotificationBar: FC<NotificationBarProps> = ({ config, sx }) => {
  const { notification, clearNotification } = useNotificationBar();
  const [isOpen, setIsOpen] = useState<boolean>(notification?.open || config?.open || false);
  const snackBarStyles = [
    ...(Array.isArray(sx) ? sx : [sx]),
    (notification?.variant === "outlined" || config?.variant === "outlined") && snackBarSx,
  ];

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    if (notification) {
      notification.open = false;
      setTimeout(() => clearNotification(), 100);
    }
    config?.actionHandler && config?.actionHandler(false);
    setIsOpen(false);
  };

  useEffect(() => {
    if (notification?.open || config?.open) {
      setIsOpen(true);
    }
  }, [notification?.open, config?.open]);

  return (
    <Snackbar
      anchorOrigin={config?.anchorOrigin || notification?.anchorOrigin}
      autoHideDuration={config?.autoHideDuration || notification?.autoHideDuration}
      onClose={(e, r) => {
        handleClose(e, r);
      }}
      open={isOpen}
      sx={snackBarStyles}
    >
      <Alert
        elevation={2}
        severity={config?.severity || notification?.severity}
        variant={config?.variant || notification?.variant || "outlined"}
      >
        <AlertTitle>{config?.title || notification?.title}</AlertTitle>
        {config?.message || notification?.message}
      </Alert>
    </Snackbar>
  );
};
