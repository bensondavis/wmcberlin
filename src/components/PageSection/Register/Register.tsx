"use client";

import styles from "./Register.module.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import cx from "classnames";
import PricingData from "@/data/pricing/pricing";
import PricingCard from "@/components/PricingCard/PricingCard";
import RegistrationModel from "@/components/RegistrationModel/RegistrationModel";
import { BASE_API_URL } from "@/utils/constants";

const Register = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  if (!BASE_API_URL) return;

  const handleClick = (title: string) => {
    setOpen(true);
    setType(title);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box id={"join"} className={cx(styles["pricing-section"])}>
      <Box className={"content-wrapper"}>
        <Typography className={styles.title}>Join us</Typography>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={6}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          {PricingData.map((data, index) => (
            <PricingCard
              key={index}
              icon={data.icon}
              title={data.title}
              price={data.price}
              onClick={handleClick}
            />
          ))}
        </Stack>
      </Box>
      <RegistrationModel
        key={type}
        open={open}
        onClose={handleClose}
        type={type as keyof typeof RegistrationModel}
      />
    </Box>
  );
};

export default Register;
