import styles from "./page.module.css";
import cx from "classnames";
import GalleryData from "@/data/gallery/gallery-data";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";

const Gallery = () => {
  return (
    <Box className={cx("content-wrapper")}>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
      >
        {GalleryData.map((data, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            className={styles["grid-item"]}
          >
            <Image src={data} alt={"pic"} className={styles.img} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
