// vendors
import { PropsWithChildren } from "react";
import { Typography } from "@mui/material";

// hooks
import { useResponsive } from "@/hooks/useResponsive";

// styles
import { StyledRoot, SideBarContainer, ChildrenContainer } from "./AuthPage.styles";

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
