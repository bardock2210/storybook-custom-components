// vendors
import { type FC } from "react";
import { Card, CardContent, CardHeader, type CardProps } from "@mui/material";

export interface SectionProps extends CardProps {
  action?: React.ReactNode;
}

export const Section: FC<SectionProps> = ({ action, children, title, ...props }) => (
  <Card {...props}>
    <CardHeader action={action} sx={{ pb: 0 }} title={title} />
    <CardContent>{children}</CardContent>
  </Card>
);
