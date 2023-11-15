import InfoIcon from "@mui/icons-material/Info";
import GroupsIcon from "@mui/icons-material/Groups";
import CollectionsIcon from "@mui/icons-material/Collections";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { ButtonProps } from "@/components/Button/Button";

const navbarButtonsData: ButtonProps[] = [
  {
    text: "about",
    href: "https://wmcberlin.de/#about",
    startIcon: <InfoIcon />,
    variant: "default",
  },
  {
    text: "gallery",
    href: "/gallery",
    startIcon: <CollectionsIcon />,
    variant: "default",
  },
  {
    text: "team",
    href: "/team",
    startIcon: <GroupsIcon />,
    variant: "default",
  },
  {
    text: "Join",
    href: "http://wmcberlin.de/#join",
    startIcon: <PersonAddAlt1Icon />,
    variant: "contained",
  },
];

export default navbarButtonsData;
