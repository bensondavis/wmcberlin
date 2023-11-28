import styles from "./page.module.css";
import Circle from "@/components/Circle/Circle";
import Hero from "@/components/PageSection/Hero/Hero";
import About from "@/components/PageSection/About/About";
import { Box } from "@mui/material";
import Offerings from "@/components/PageSection/Offerings/Offerings";
import Join from "@/components/PageSection/Join/Join";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Box sx={{ display: { xs: "none", sm: "none", md: "contents" } }}>
        <Circle
          radius="250px"
          color="#F5FCFE"
          className={styles["main-circle"]}
        />
      </Box>
      <Circle radius="60vh" color="#F8F5FE" className={styles.circle} />

      <About />
      <Offerings />
      <Join />
    </main>
  );
}
