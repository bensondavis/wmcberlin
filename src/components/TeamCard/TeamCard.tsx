import styles from "./TeamCard.module.css";
import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export interface TeamCardProps {
  name: string;
  img: StaticImageData;
  title: string;
}

const TeamCard = ({ name, img, title }: TeamCardProps) => {
  return (
    <Stack direction={"column"} spacing={1} className={styles.card}>
      <Box >
      <Image src={img} alt="profile pic" className={styles.img} />

      </Box>
      <Typography className={styles.name}>{name}</Typography>
      <Typography className={styles.title}>{title}</Typography>
    </Stack>
  );
};

export default TeamCard;
