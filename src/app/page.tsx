import styles from "./page.module.css";
import Circle from "@/components/Circle/Circle";
import Hero from "@/components/PageSection/Hero/Hero";
import About from "@/components/PageSection/About/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Circle
        radius="250px"
        color="#F5FCFE"
        className={styles["main-circle"]}
      />
      <About />
    </main>
  );
}
