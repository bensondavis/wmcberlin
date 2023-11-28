"use client";

import { Stack, Typography } from "@mui/material";
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import Button from "@/components/Button/Button";
import { useState } from "react";
import RegistrationCard from "@/components/RegistrationModel/RegistrationCard";
import { BASE_API_URL } from "@/utils/constants";

const RegisterPage = () => {
  const [selected, setSelected] = useState(1);
  const [type, setType] = useState<"Family" | "Single" | "Student">("Single");

  if (!BASE_API_URL) return;

  const handleClick = (index: number, key: string) => {
    setSelected(index);
    setType(key as typeof type);
  };
  return (
    <Box className={styles["main-container"]}>
      <Box className={"content-wrapper"}>
        <Typography className={styles.title}>
          Membership Registration
        </Typography>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={2}
          className={styles.stack}
        >
          {["Family", "Single", "Student"].map((data, index) => (
            <Button
              key={index}
              variant={selected === index ? "contained" : "standard"}
              className={styles["type-btn"]}
              onClick={() => handleClick(index, data)}
            >
              {data}
            </Button>
          ))}
        </Stack>
        <RegistrationCard type={type} />
      </Box>
    </Box>
  );
};

export default RegisterPage;
