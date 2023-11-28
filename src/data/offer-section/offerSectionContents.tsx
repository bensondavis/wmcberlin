import JoinCardProps from "@/interfaces/joinCard";
import CultureIcon from "@/components/Icons/Culture";
import NetworkIcon from "@/components/Icons/Network";
import OpportunitiesIcon from "@/components/Icons/Opportunities";

const data: JoinCardProps[] = [
  {
    icon: <CultureIcon  />,
    title: "Cultural Fusion",
    desc: "Immerse yourself in the rich tapestry of Malayalee culture while celebrating our diverse traditions, festivals, and language.",
  },
  {
    icon: <NetworkIcon />,
    title: "Global Network",
    desc: "Access a vast network of Malayalee professionals, entrepreneurs, and enthusiasts spanning across continents. Expand your horizons and tap into a global community.",
  },
  {
    icon: <OpportunitiesIcon />,
    title: "Opportunities Abound",
    desc: "Unlock a world of possibilities through exclusive events, workshops, and collaborations. WMC Berlin Province opens doors to professional growth, mentorship, and unique experiences.",
  },
];

export default data;
