import { FC } from "react";
import { Avatar, Link, Stack, Typography } from "@mui/material";
import { DynamicForm, DynamicFormProps } from "@/components/form/DynamicForm/DynamicForm";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthFormContainer } from "./AuthForm.styles";

export interface AuthFormProps {
  actions: {
    haveAccount: {
      description: string;
      link: string;
      linkHandler: () => void;
    };
    question: {
      link: string;
      linkHandler: () => void;
    };
  };
  authFormProps: DynamicFormProps;
  title: string;
  variant?: "elevation" | "outlined";
}

export const AuthForm: FC<AuthFormProps> = ({
  actions: { haveAccount, question },
  authFormProps,
  title,
  variant = "outlined",
}) => (
  <AuthFormContainer variant={variant}>
    <Stack alignItems="center" width="100%">
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
    </Stack>
    <DynamicForm {...authFormProps} />
    <Stack alignItems="center" direction="row" justifyContent="space-between" width="100%">
      <Typography variant="body2">
        {`${haveAccount.description}, `}
        <Link onClick={haveAccount.linkHandler} underline="none" variant="subtitle2">
          {haveAccount.link}
        </Link>
      </Typography>
      <Link onClick={question.linkHandler} underline="none" variant="subtitle2">
        {question.link}
      </Link>
    </Stack>
  </AuthFormContainer>
);
