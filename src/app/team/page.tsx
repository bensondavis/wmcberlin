import styles from "./page.module.css";
import cx from "classnames";
import TeamCard from "@/components/TeamCard/TeamCard";
import TeamData from "@/data/team/team";
import { Box, Grid, Typography } from "@mui/material";

const Team = () => {
  return (
    <Box className={cx("content-wrapper", styles["team-container"])}>
      <Typography className={styles.title}>Meet Our Team</Typography>
      <Grid container spacing={2} className={styles.container}>
        {TeamData.map((data, index) => (
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            key={index}
            className={styles["grid-item"]}
          >
            <TeamCard img={data.img} name={data.name} title={data.title} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
