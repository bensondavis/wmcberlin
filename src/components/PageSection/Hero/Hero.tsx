import styles from "./Hero.module.css";
import { Box, Stack } from "@mui/material";
import { Nunito_Sans } from "next/font/google";
import slideShowData from "@/data/slideShow/slideShow";
import SlideShow from "../../SlideShow/SlideShow";
import Circle from "../../Circle/Circle";

const NunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "800",
});

const Hero = () => {
  return (
    <Box className={styles.container}>
      <Stack
        className={"content-wrapper"}
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ md: 2, xs: 8 }}
        alignItems={"center"}
        sx={{ my: { xs: "50px !important", md: "120px !important" } }}
      >
        <Stack className={styles.container} spacing={3}>
          <Box
            className={NunitoSans.className}
            sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}
          >
            VISIBILITY . CONNECTIONS . GROWTH
          </Box>
          <Box
            className={styles.vision}
            sx={{
              textAlign: { xs: "center", sm: "center", md: "left" },
            }}
          >
            Empowering Communities, Enriching Lives, Building a Brighter Future{" "}
            <span>Together</span>.
          </Box>
        </Stack>
        <Box
          className={styles.container}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SlideShow images={slideShowData} />
          <Box sx={{ display: { md: "none", xs: "contents" } }}>
            <Circle
              radius="55vw"
              color="#FDFAF4"
              className={styles["hero-circle"]}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero;
