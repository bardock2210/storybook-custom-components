// vendors
import { type FC } from "react";
import {
  Backdrop,
  BackdropProps,
  CircularProgress,
  type CircularProgressProps,
} from "@mui/material";

// styles
import { loadingSx } from "./Loading.styles";

export interface LoadingProps extends BackdropProps {
  color?: CircularProgressProps["color"];
  size?: CircularProgressProps["size"];
}

export const Loading: FC<LoadingProps> = ({ color = "inherit", open, size }) => {
  return (
    <Backdrop open={open} sx={loadingSx}>
      <CircularProgress color={color} size={size} />
    </Backdrop>
  );
};
