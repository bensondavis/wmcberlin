import { PricingCardProps } from "@/components/PricingCard/PricingCard";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";

const PricingData: PricingCardProps[] = [
  {
    icon: <FamilyRestroomIcon />,
    title: "Family",
    price: "15",
  },
  {
    icon: <PersonIcon />,
    title: "Single",
    price: "10",
  },
  {
    icon: <SchoolIcon />,
    title: "Student",
    price: "5",
  },
];

export default PricingData;
