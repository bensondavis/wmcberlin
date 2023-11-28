import styles from "./Offerings.module.css";
import cx from "classnames";
import { Box, Grid, Stack, Typography } from "@mui/material";
import data from "@/data/offer-section/offerSectionContents";

const Offerings = () => {
  return (
    <Box id={"offers"} className={styles["main-container"]}>
      <Box className={"content-wrapper"}>
        <Typography className={cx(styles.heading, styles["text-align-center"])}>
          Why join us?
        </Typography>

        <Box className={styles["offer-desc-container"]}>
          <Typography className={styles["offer-desc-text"]}>
            Welcome to WMC Berlin Province, a vibrant community within the World
            Malayalee Council, connecting Malayalees globally. Discover why
            joining us is the key to fostering cultural bonds, exploring
            opportunities, and creating lasting connections with fellow
            Malayalees around the world.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent={"center"}>
          {data.map((cardItem, index) => (
            <Grid key={index} md={4} sm={6} xs={12} item>
              <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={1}
              >
                <Box className={styles["card-icon"]}>{cardItem.icon}</Box>
                <Typography className={styles.title}>
                  {cardItem.title}
                </Typography>
                <Typography className={styles["card-desc"]}>
                  {cardItem.desc}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Offerings;
