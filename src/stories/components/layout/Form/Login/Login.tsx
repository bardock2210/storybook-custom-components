import { FC } from "react";
import { Avatar, Container, Link, Stack, Typography } from "@mui/material";
import { DynamicForm, DynamicFormProps } from "@/components/form/DynamicForm/DynamicForm";
import { LoginFormContainer, StyledRoot, SideBarContainer } from "./loginStyles";
import { useResponsive } from "@/hooks/useResponsive";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export interface LoginProps {
  forgotPassword: {
    forgotPasswordHandler: () => void;
    forgotPasswordDescription: string;
  };
  formTitle: string;
  loginFormProps: DynamicFormProps;
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

export const Login: FC<LoginProps> = ({
  forgotPassword: { forgotPasswordDescription, forgotPasswordHandler },
  formTitle,
  loginFormProps,
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
        <LoginFormContainer>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" gutterBottom>
            {formTitle}
          </Typography>
          <DynamicForm {...loginFormProps} />
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
        </LoginFormContainer>
      </Container>
    </StyledRoot>
  );
};
