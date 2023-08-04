import React, { FC } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { panelHeaderSx } from "./panelStyles";

export interface PanelProps {
  title: string;
  body: JSX.Element;
}

export const Panel: FC<PanelProps> = ({ body, title }) => {
  return (
    <Card>
      <CardHeader sx={panelHeaderSx} title={title} />
      <CardContent>{body}</CardContent>
    </Card>
  );
};
