import styles from "./TeamCard.module.css";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import TeamCardProps from "@/interfaces/teamCard";

const TeamCard = ({ name, img, title }: TeamCardProps) => {
  return (
    <Stack direction={"column"} spacing={1} className={styles.card}>
      <Image src={img} alt="profile pic" className={styles.img} priority />
      <Typography className={styles.name}>{name}</Typography>
      <Typography className={styles.title}>{title}</Typography>
    </Stack>
  );
};

export default TeamCard;
