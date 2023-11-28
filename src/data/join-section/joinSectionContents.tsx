import MeetIcon from "@/components/Icons/Meet";
import MembershipIcon from "@/components/Icons/Membership";
import OnlineMeetupIcon from "@/components/Icons/OnlineMeetup";
import JoinCardProps from "@/interfaces/joinCard";

const data: JoinCardProps[] = [
  {
    icon: <OnlineMeetupIcon />,
    title: "Connect with Us",
    desc: "Follow us on social media platforms to stay updated on upcoming events, initiatives, and community news.",
  },
  {
    icon: <MeetIcon />,
    title: "Attend Local Meetups",
    desc: "Join our local events in Berlin to meet fellow Malayalees, build connections, and actively participate in our vibrant community.",
  },
  {
    icon: <MembershipIcon />,
    title: "Membership Registration",
    desc: "Become a part of our global family by completing a simple registration process. Enjoy exclusive member benefits and stay connected.",
  },
];

export default data;
