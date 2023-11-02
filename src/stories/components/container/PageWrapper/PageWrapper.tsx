// vendors
import { Grid, Typography } from "@mui/material";

// types
import type { FC } from "react";

// styles
import { containerSx, titleSx } from "./pageWrapper";

export interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
}

export const PageWrapper: FC<PageWrapperProps> = ({ children, title }) => (
  <Grid container spacing={2} sx={containerSx}>
    <Grid className="contain" item xs={12}>
      <Typography sx={titleSx} variant="h4">
        {title}
      </Typography>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Grid>
  </Grid>
);
