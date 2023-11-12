// vendors
import { Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

// types
import { Children, type FC } from "react";

// styles
import { containerSx, titleSx } from "./PageContainer.styles";

export interface PageContainerProps {
  children: React.ReactNode;
  title: string;
}

export const PageContainer: FC<PageContainerProps> = ({ children, title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <Container sx={containerSx}>
      <Typography sx={titleSx} variant="h4">
        {title}
      </Typography>
      <Grid container spacing={2}>
        {Children.count(children) > 1 ? (
          Children.map(children, (child, index) => (
            <Grid item key={`card-grid-item-${index}`} xs={isMobile ? 12 : isTablet ? 4 : 3}>
              {child}
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            {children}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
