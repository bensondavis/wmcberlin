import PricingCardProps from "@/interfaces/priceCard";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";

const PricingData: PricingCardProps[] = [
  {
    icon: <FamilyRestroomIcon />,
    title: "Family",
    price: "15",
    onClick: () => {},
  },
  {
    icon: <PersonIcon />,
    title: "Single",
    price: "10",
    onClick: () => {},
  },
  {
    icon: <SchoolIcon />,
    title: "Student",
    price: "5",
    onClick: () => {},
  },
];

export default PricingData;
