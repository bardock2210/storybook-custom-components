// vendors
import { Grid, Typography } from "@mui/material";

// types
import type { FC } from "react";

// styles
import { containerSx, titleSx } from "./pageWrapperStyles";

export interface PageContainerProps {
  children: React.ReactNode;
  title: string;
}

export const PageContainer: FC<PageContainerProps> = ({ children, title }) => (
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
