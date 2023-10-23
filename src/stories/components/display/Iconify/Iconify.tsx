import { FC, forwardRef } from "react";
import { Box, SxProps } from "@mui/material";
import { Icon, type IconifyIcon } from "@iconify/react";

export interface IconifyProps {
  height: number;
  icon: string | IconifyIcon;
  sx?: SxProps;
  width: number;
}

export const Iconify: FC<IconifyProps> = forwardRef(
  ({ height, icon, width = 20, sx, ...other }, ref) => (
    <Box ref={ref} component={Icon} icon={icon} sx={{ width, height, ...sx }} {...other} />
  )
);
