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
  formTitle: string;
}

export const AuthForm: FC<AuthFormProps> = ({
  actions: { haveAccount, question },
  authFormProps,
  formTitle,
}) => {
  return (
    <AuthFormContainer>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h4" gutterBottom>
        {formTitle}
      </Typography>
      <DynamicForm {...authFormProps} />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        paddingTop="1rem"
        width="100%"
      >
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
};
