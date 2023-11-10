import InfoIcon from "@mui/icons-material/Info";
import GroupsIcon from "@mui/icons-material/Groups";
import CollectionsIcon from "@mui/icons-material/Collections";
import CallIcon from "@mui/icons-material/Call";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { ButtonProps } from "@/components/Button/Button";

const navbarButtonsData: ButtonProps[] = [
  {
    text: "about",
    href: "/about",
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
    text: "contact",
    href: "/contact",
    startIcon: <CallIcon />,
    variant: "default",
  },
  {
    text: "Join",
    href: "/join",
    startIcon: <HowToRegIcon />,
    variant: "contained",
  },
];

export default navbarButtonsData;
