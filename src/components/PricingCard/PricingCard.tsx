"use client";

import styles from "./PricingCard.module.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import cx from "classnames";
import { useState } from "react";

export interface PricingCardProps {
  title: string;
  icon: React.ReactNode;
  price: string;
  key?: string | number;
  onClick: (title: string) => void;
}

const PricingCard = ({ title, icon, price, onClick }: PricingCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      className={cx(styles.card, { [styles["hovered-bg"]]: hover })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onClick(title)}
    >
      <Stack
        direction={"column"}
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
        className={styles.stack}
      >
        <Box className={cx(styles.icon, { [styles["hovered-text"]]: hover })}>
          {icon}
        </Box>
        <Box className={cx(styles.title, { [styles["hovered-text"]]: hover })}>
          {title}
        </Box>
        <Box className={cx(styles.price, { [styles["hovered-text"]]: hover })}>
          €{price}
        </Box>
      </Stack>
    </Box>
  );
};

export default PricingCard;
