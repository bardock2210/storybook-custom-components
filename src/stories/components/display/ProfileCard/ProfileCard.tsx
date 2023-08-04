import { FC } from "react";
import { CardContent, Typography } from "@mui/material";
import { ProfileAvatar, ProfileCardContainer, ProfileInfoElement } from "./profileCardStyles";

export interface UserInfoProps {
  icon: JSX.Element;
  info: string;
}

export interface ProfileCardProps {
  imageUrl: string;
  name: string;
  userInfo: UserInfoProps[];
}

export const ProfileCard: FC<ProfileCardProps> = ({ imageUrl, name, userInfo }) => {
  return (
    <ProfileCardContainer>
      <ProfileAvatar alt={name} src={imageUrl} />
      <CardContent>
        <Typography align="center" component="h2" variant="h5" paddingBottom={2}>
          {name}
        </Typography>
        {userInfo.map(({ icon, info }, index) => (
          <ProfileInfoElement color="textSecondary" gutterBottom key={`profile-element-${index}`}>
            {icon}
            {info}
          </ProfileInfoElement>
        ))}
      </CardContent>
    </ProfileCardContainer>
  );
};
