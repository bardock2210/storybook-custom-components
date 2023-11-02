// vendors
import { Container, Grid, Typography } from "@mui/material";

// types
import type { FC } from "react";

// styles
import { containerSx, titleSx } from "./pageContainerStyles";

export interface PageContainerProps {
  children: React.ReactNode;
  title: string;
}

export const PageContainer: FC<PageContainerProps> = ({ children, title }) => (
  <Container sx={containerSx}>
    <Typography sx={titleSx} variant="h4">
      {title}
    </Typography>
    <Grid container spacing={2}>
      {children}
    </Grid>
  </Container>
);
