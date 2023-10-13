import { PropsWithChildren } from "react";
import { Container, Typography } from "@mui/material";
import { StyledRoot, SideBarContainer } from "./authPageStyles";
import { useResponsive } from "@/hooks/useResponsive";

export interface AuthProps {
  sideBar: {
    image: JSX.Element;
    title: string;
  };
}

export const AuthPage = ({ children, sideBar: { image, title } }: PropsWithChildren<AuthProps>) => {
  const middleUp = useResponsive("up", "md");

  return (
    <StyledRoot>
      {middleUp && (
        <SideBarContainer>
          <Typography variant="h3">{title}</Typography>
          {image}
        </SideBarContainer>
      )}
      <Container maxWidth="sm">{children}</Container>
    </StyledRoot>
  );
};
