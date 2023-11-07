// vendors
import { type FC } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";

// styles
import { panelHeaderSx } from "./Panel.styles";

export interface PanelProps {
  title: string;
  body: JSX.Element;
}

export const Panel: FC<PanelProps> = ({ body, title }) => (
  <Card>
    <CardHeader sx={panelHeaderSx} title={title} />
    <CardContent>{body}</CardContent>
  </Card>
);
