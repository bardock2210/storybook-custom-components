// vendors
import { type FC } from "react";
import { Card, CardContent, CardHeader, type CardProps } from "@mui/material";

// styles
import { sectionSx } from "./Section.styles";

export interface SectionProps extends CardProps {
  action?: React.ReactNode;
}

export const Section: FC<SectionProps> = ({ action, children, title, ...props }) => (
  <Card {...props} sx={sectionSx}>
    <CardHeader action={action} title={title} />
    <CardContent>{children}</CardContent>
  </Card>
);
