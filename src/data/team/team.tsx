import { TeamCardProps } from "@/components/TeamCard/TeamCard";
import anu from "../../assets/team/anu-varghese.jpg";
import sabarish from "../../assets/team/sabarish-panicker.jpg"
import vinayak from "../../assets/team/vinayak.jpg"
import ammu from "../../assets/team/ammu.jpg";
import veena from "../../assets/team/veena.jpg"

const TeamData:TeamCardProps[] = [
  {
    img: sabarish,
    name: "Sabarish Panicker",
    title: "President"
  }, 
  {
    img: vinayak,
    name: "Vinayak Sankar",
    title: "Secretary"
  },
  {
    img: ammu,
    name: "Ammu Hariharan",
    title: "Treasurer"
  },
  {
    img: veena,
    name: "Veena Rajan",
    title: "Vice President"
  },
  {
  img: anu,
  name: "Anu Varghese",
  title: "Joint Secretary"
}, ]

export default TeamData;