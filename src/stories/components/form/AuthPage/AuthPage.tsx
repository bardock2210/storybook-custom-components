import { FC } from "react";
import { Avatar, Container, Link, Stack, Typography } from "@mui/material";
import { DynamicForm, DynamicFormProps } from "@/components/form/DynamicForm/DynamicForm";
import { AuthFormContainer, StyledRoot, SideBarContainer } from "./authPageStyles";
import { useResponsive } from "@/hooks/useResponsive";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export interface AuthProps {
  forgotPassword: {
    forgotPasswordHandler: () => void;
    forgotPasswordDescription: string;
  };
  formTitle: string;
  authFormProps: DynamicFormProps;
  haveAnAccount: {
    registerDescription: string;
    registerHandler: () => void;
    question: string;
  };
  sideBar: {
    image: JSX.Element;
    title: string;
  };
}

export const AuthPage: FC<AuthProps> = ({
  forgotPassword: { forgotPasswordDescription, forgotPasswordHandler },
  formTitle,
  authFormProps,
  haveAnAccount: { registerDescription, registerHandler, question },
  sideBar: { image, title },
}) => {
  const middleUp = useResponsive("up", "md");

  return (
    <StyledRoot>
      {middleUp && (
        <SideBarContainer>
          <Typography variant="h3">{title}</Typography>
          {image}
        </SideBarContainer>
      )}
      <Container maxWidth="sm">
        <AuthFormContainer>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" gutterBottom>
            {formTitle}
          </Typography>
          <DynamicForm {...authFormProps} />
          <Stack alignItems="center" direction="row" justifyContent="space-between">
            <Typography variant="body2">
              {`${question}, `}
              <Link onClick={registerHandler} underline="none" variant="subtitle2">
                {registerDescription}
              </Link>
            </Typography>
            <Link onClick={forgotPasswordHandler} underline="none" variant="subtitle2">
              {forgotPasswordDescription}
            </Link>
          </Stack>
        </AuthFormContainer>
      </Container>
    </StyledRoot>
  );
};
