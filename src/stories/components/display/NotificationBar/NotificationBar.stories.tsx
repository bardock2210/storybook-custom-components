import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import { NotificationBar } from "./NotificationBar";
import { useNotificationBar } from "@/context/Components";

const meta: Meta<typeof NotificationBar> = {
  component: NotificationBar,
  title: "ZipCodeService/Display/NotificationBar",
};

export default meta;
type Story = StoryObj<typeof NotificationBar>;

const NotificationBarDefaultTemplate: Story = {
  render: (args) => {
    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <NotificationBar
          config={{
            message: "This notification message is a test.",
            open: true,
            title: "Info Test",
            severity: "error",
          }}
        />
      </Stack>
    );
  },
};

const NotificationBarControledTemplate: Story = {
  render: (args) => {
    const [open, setOpen] = useState<boolean>(false);

    const onClickHandler = () => {
      setOpen(true);
    };

    const onCloseHandler = () => {
      setOpen(false);
    };

    return (
      <>
        <Button onClick={onClickHandler} variant="contained">
          Open NotificationBar
        </Button>
        <NotificationBar
          config={{
            autoHideDuration: 2000,
            message: "This notification message is a test.",
            onClose: onCloseHandler,
            open,
            title: "Success Test",
          }}
        />
      </>
    );
  },
};

const NotificationBarWithHookTemplate: Story = {
  render: (args) => {
    const { showNotification } = useNotificationBar();

    const onClickHandler = () => {
      showNotification({
        autoHideDuration: 2000,
        message: "This notification message is a test.",
        open: true,
        title: "Success Test",
      });
    };

    return (
      <Button onClick={onClickHandler} variant="contained">
        Open NotificationBar
      </Button>
    );
  },
};

export const Default: Story = {
  ...NotificationBarDefaultTemplate,
  args: {},
};

export const NotificationBarOnEvent: Story = {
  ...NotificationBarControledTemplate,
  args: {},
};

export const NotificationBarWithHook: Story = {
  ...NotificationBarWithHookTemplate,
  args: {},
};
