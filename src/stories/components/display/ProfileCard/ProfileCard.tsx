// vendors
import { type FC } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

// styles
import { ProfileAvatar, ProfileInfoElement } from "./ProfileCard.styles";

export interface UserInfoProps {
  icon: JSX.Element;
  info: string;
}

export interface ProfileCardProps {
  imageUrl: string;
  name: string;
  userInfo: UserInfoProps[];
}

export const ProfileCard: FC<ProfileCardProps> = ({ imageUrl, name, userInfo }) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProfileAvatar alt={name} src={imageUrl} />
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Box>
          {userInfo.map(({ icon, info }, index) => (
            <ProfileInfoElement
              color="textSecondary"
              key={`profile-element-${index}`}
              variant="body2"
            >
              {icon}
              {info}
            </ProfileInfoElement>
          ))}
        </Box>
      </Box>
    </CardContent>
  </Card>
);
