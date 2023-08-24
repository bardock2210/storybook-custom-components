import { FC } from "react";
import { Container, Link, Stack, Typography } from "@mui/material";
import { DynamicForm, DynamicFormProps } from "@/components/form/DynamicForm/DynamicForm";
import { StyledContent, StyledRoot, StyledSection } from "./loginStyles";
import { useResponsive } from "@/hooks/useResponsive";

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
    image: string;
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
        <StyledSection>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            {title}
          </Typography>
          <img src={image} alt="login" />
        </StyledSection>
      )}
      <Container maxWidth="sm">
        <StyledContent>
          <Typography variant="h4" gutterBottom>
            {formTitle}
          </Typography>
          <DynamicForm {...loginFormProps} />
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
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
        </StyledContent>
      </Container>
    </StyledRoot>
  );
};
