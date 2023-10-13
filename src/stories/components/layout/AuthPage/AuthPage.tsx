import { PropsWithChildren } from "react";
import { Typography } from "@mui/material";
import { StyledRoot, SideBarContainer, ChildrenContainer } from "./authPageStyles";
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
      <ChildrenContainer maxWidth="sm">{children}</ChildrenContainer>
    </StyledRoot>
  );
};
