import styles from "./Join.module.css";
import { Box, Grid, Stack, Typography } from "@mui/material";
import cx from "classnames";
import data from "@/data/join-section/joinSectionContents";
import Button from "@/components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Join = () => {
  return (
    <Box id={"join"} className={styles["main-container"]}>
      <Box className={"content-wrapper"}>
        <Typography className={cx(styles.heading, styles["text-align-center"])}>
          How to Join?
        </Typography>

        <Grid
          container
          spacing={3}
          className={styles["grid-container"]}
          justifyContent={"center"}
        >
          {data.map((cardItem, index) => (
            <Grid key={index} item md={4} sm={6} xs={12}>
              <Stack
                className={styles.card}
                justifyContent={"flex-start"}
                alignItems={"center"}
                spacing={2}
              >
                <Box className={styles["card-icon-container"]}>
                  {cardItem.icon}
                </Box>
                <Typography
                  className={cx(
                    styles["card-title"],
                    styles["text-align-center"]
                  )}
                >
                  {cardItem.title}
                </Typography>
                <Typography
                  className={cx(
                    styles["card-desc"],
                    styles["text-align-center"]
                  )}
                >
                  {cardItem.desc}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Typography className={styles.desc}>
          Embark on a journey with WMC Berlin Province and become an integral
          part of a global Malayalee community dedicated to fostering unity,
          growth, and cultural exchange. Join us today!
        </Typography>

        <Button
          href="/register"
          className={styles.btn}
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Join;
