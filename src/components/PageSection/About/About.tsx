import { Box, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo.png";
import Image from "next/image";
import styles from "./About.module.css";
import cx from "classnames";

const About = () => {
  return (
    <Box id={"about"} className={cx(styles.container, styles["about-section"])} >
      <Stack
        className={cx("content-wrapper")}
        direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={3}
      >
        <Box className={styles.container}>
          <Box className={styles["logo-container"]}>
            <Image src={logo} alt="logo" className={styles.logo} />
          </Box>
        </Box>
        <Box className={styles.container}>
          <Typography className={cx(styles["align-left"], styles.heading)}>
            About wmcBerlin.de
          </Typography>
          <br />
          <br />
          <Typography
            className={styles.title}
            sx={{
              fontSize: { xs: "1.3rem !important", sm: "2.6rem !important" },
            }}
          >
            World Malayalee Council
          </Typography>
          <br />
          <Typography
            className={cx(styles["align-left"], styles.about)}
            sx={{
              fontSize: { xs: ".8rem !important", sm: "inherit !important" },
            }}
          >
            WMC Berlin Province works towards an international brotherhood of
            Malayalees / people of Kerala origin to bolster their cultural,
            artistic and social uniqueness and give resilience and understanding
            towards other cultures with which they have to co-exist and
            interact. World Malayalee Council, the organisation working with the
            Malayalee diaspora across the Globe. The Malayalee (Malayalam:
            മലയാളി) are an ethno-linguistic group native to the South Indian
            state of Kerala and the UnionTerritory of Lakshadweep and have the
            Malayalam language as their mother tongue.The Malayali community in
            India has a history of immigrants to the region from various parts
            of the world, as well as a unique sub-culture owing to the tropical
            environment of the state.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
