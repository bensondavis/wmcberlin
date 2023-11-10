"use client";

import styles from "./SlideShow.module.css";
import { Paper, Typography, Skeleton } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const duration = 5000;

export interface SlideShowImg {
  img: StaticImageData;
  desc: string;
}

interface SlideShowProps {
  images: SlideShowImg[];
}

const SlideShow = ({ images }: SlideShowProps) => {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <Paper
      // sx={{ width: { xs: "100%" }, }}
      className={styles.slideshow}
      elevation={5}
    >
      <Image
        src={images[index].img}
        alt="pic"
        style={{ width: "100%", height: "auto" }}
        className={styles.img}
        onLoad={() => setLoading(false)}
      />
      <Typography className={styles.desc}>{images[0].desc}</Typography>
      {loading ? (
        <Skeleton
          variant="rectangular"
          className={styles.skeleton}
        />
      ) : null}
    </Paper>
  );
};

export default SlideShow;
