import { Meta, StoryObj } from "@storybook/react";
import { ProfileCard, type UserInfoProps } from "./ProfileCard";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";

const userInfo: UserInfoProps[] = [
  {
    icon: <MailOutlineIcon fontSize="small" />,
    info: "joe.d@domain.com",
  },
  {
    icon: <ContactPhoneOutlinedIcon fontSize="small" />,
    info: "5578963256",
  },
];

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
  title: "ZipCodeService/Display/ProfileCard",
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const DefaultProfileCardTemplate: Story = {
  render: (args) => {
    return <ProfileCard {...args} />;
  },
};

export const Default: Story = {
  ...DefaultProfileCardTemplate,
  args: {
    imageUrl: "",
    name: "Arturo Mellado",
    userInfo,
  },
};
