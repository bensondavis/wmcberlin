"use client";

import styles from "./SlideShow.module.css";
import { Paper, Typography, Skeleton, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import SlideShowImgProps from "@/interfaces/slideShowImg";

const duration = 5000;

interface SlideShowProps {
  images: SlideShowImgProps[];
}

const SlideShow = ({ images }: SlideShowProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className={styles.slideshow}>
      <Image
        src={images[index].img}
        alt="pic"
        className={styles.img}
        priority
      />

      <Box className={styles["gradient-filter"]}>
        <Typography className={styles.desc}>{images[index].desc}</Typography>
      </Box>
    </div>
  );
};

export default SlideShow;
