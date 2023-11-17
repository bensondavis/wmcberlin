"use client";

import axios from "axios";
import styles from "./Pricing.module.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import cx from "classnames";
import PricingData from "@/data/pricing/pricing";
import PricingCard from "@/components/PricingCard/PricingCard";
import RegistrationModel, {
  People,
} from "@/components/RegistrationModel/RegistrationModel";
import { BASE_API_URL } from "@/utils/constants";

const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [job, setJob] = useState("");
  const [peoples, setPeoples] = useState<People[]>([{ fname: "", lname: "" }]);

  if (!BASE_API_URL) return;

  const handleClick = (title: string) => {
    setOpen(true);
    setType(title);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    axios
      .post(
        `${BASE_API_URL}/api/submit`,
        {
          fname: fname,
          lname: lname,
          email: email,
          phn: phn,
          job: job,
          peoples: peoples,
          type: type,
        },
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
      });
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
        fname={fname}
        lname={lname}
        email={email}
        phn={phn}
        job={job}
        peoples={peoples}
        setFname={setFname}
        setLname={setLname}
        setEmail={setEmail}
        setJob={setJob}
        setPeoples={setPeoples}
        setPhn={setPhn}
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        type={
          type === "Student"
            ? "Student"
            : type === "Family"
            ? "Family"
            : "Single"
        }
      />
    </Box>
  );
};

export default Pricing;
