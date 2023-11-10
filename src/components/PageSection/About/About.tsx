import { Box, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo.png";
import Image from "next/image";
import styles from "./About.module.css";
import cx from "classnames";

const About = () => {
  return (
    <Box className={styles.container}>
      <Stack className={cx("content-wrapper")}>
        <Box>
          <Image src={logo} alt="logo" />
        </Box>
        <Box>
          <Typography className={cx(styles["align-left"], styles.heading)}>
            About wmcBerlin.de
          </Typography>
          <Typography className={cx(styles["align-left"])}>
            World Malayalee Council Berlin Province works towards an
            international brotherhood of Malayalees / people of Kerala origin to
            bolster their cultural, artistic and social uniqueness and give
            resilience and understanding towards other cultures with which they
            have to co-exist and interact. World Malayalee Council, the
            organisation working with the Malayalee diaspora across the Globe.
            The Malayalee (Malayalam: മലയാളി) are an ethno-linguistic group
            native to the South Indian state of Kerala and the UnionTerritory of
            Lakshadweep and have the Malayalam language as their mother
            tongue.The Malayali community in India has a history of immigrants
            to the region from various parts of the world, as well as a unique
            sub-culture owing to the tropical environment of the state.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
