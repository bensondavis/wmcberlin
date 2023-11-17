import InfoIcon from "@mui/icons-material/Info";
import GroupsIcon from "@mui/icons-material/Groups";
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { ButtonProps } from "@/components/Button/Button";
import { BASE_API_URL } from "@/utils/constants";

const navbarButtonsData: ButtonProps[] = [
  {
    text: "About",
    href: `${BASE_API_URL}/#about`,
    startIcon: <InfoIcon />,
    variant: "default",
  },
  {
    text: "Gallery",
    href: "/gallery",
    startIcon: <CollectionsIcon />,
    variant: "default",
  },
  {
    text: "Team",
    href: "/team",
    startIcon: <GroupsIcon />,
    variant: "default",
  },
  {
    text: "Join",
    href: `${BASE_API_URL}/#join`,
    startIcon: <PersonAddAlt1Icon />,
    variant: "contained",
  },
];

export default navbarButtonsData;
