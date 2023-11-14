"use client";

import styles from "./RegistrationModel.module.css";
import cx from "classnames";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";

export interface People {
  fname: string;
  lname: string;
}

interface RegistrationModelProps {
  fname: string;
  setFname: (fname: string) => void;
  lname: string;
  setLname: (lname: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phn: string;
  setPhn: (phn: string) => void;
  job: string;
  setJob: (job: string) => void;
  peoples: People[];
  setPeoples: (peoples: People[]) => void;
  open: boolean;
  onClose: () => void;
  type: "Student" | "Family" | "Single";
}

const RegistrationModel = ({
  open,
  onClose,
  type,
  fname,
  setFname,
  lname,
  setLname,
  email,
  setEmail,
  phn,
  setPhn,
  job,
  setJob,
  peoples,
  setPeoples,
}: RegistrationModelProps) => {
  const cardRef = useRef<HTMLDivElement>();
  const [cardHeight, setCardHeight] = useState(0);
  const [viewport, setViewport] = useState(0);

  const handlePeopleFname = (index: number, newFname: string) => {
    const newPeoples = [...peoples];
    newPeoples[index].fname = newFname;
    setPeoples(newPeoples);
  };

  const handlePeopleLname = (index: number, newLname: string) => {
    const newPeoples = [...peoples];
    newPeoples[index].lname = newLname;
    setPeoples(newPeoples);
  };

  const handleAddPeople = () => {
    setPeoples([...peoples, { fname: "", lname: "" }]);
  };

  const handleRemove = (index: number) => {
    const filteredPeoples = peoples.filter((data, i) => i !== index);
    setPeoples(filteredPeoples);
  };

  useEffect(() => {
    if (cardRef.current?.offsetHeight) {
      setCardHeight(cardRef.current?.offsetHeight);
    }
  }, [cardRef.current?.offsetHeight]);

  useEffect(() => {
    setViewport(window.innerHeight);
  }, []);

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={cx(styles.modal, {
        [styles["align-item-center"]]: cardHeight < viewport,
      })}
    >
      <Box ref={cardRef} className={styles.card}>
        <IconButton className={styles.cancel} onClick={onClose}>
          <CancelIcon />
        </IconButton>
        <Typography className={styles.title}>Register</Typography>
        <Stack direction={"column"} spacing={3}>
          <TextField
            label="First Name"
            variant="outlined"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          {type !== "Student" ? (
            <TextField
              label="Occupation"
              variant="outlined"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          ) : null}
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Phone no."
            variant="outlined"
            value={phn}
            onChange={(e) => setPhn(e.target.value)}
          />

          {type === "Family" ? <Stack direction={"column"} spacing={3}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ pl: 1 }}
            >
              <Typography>Add People</Typography>
              <IconButton onClick={handleAddPeople} className={styles["add-btn"]}>
                <AddCircleIcon />
              </IconButton>
            </Stack>
            {peoples.map((data, index) => (
              <Stack
                direction={"row"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                spacing={2}
              >
                <Stack
                  direction={{ xs: "column", sm: "row", md: "row" }}
                  justifyContent={"space-evenly"}
                  alignItems={"center"}
                  spacing={2}
                >
                  <TextField
                    label="First Name"
                    variant="outlined"
                    value={data.fname}
                    onChange={(e) => handlePeopleFname(index, e.target.value)}
                  />
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    value={data.lname}
                    onChange={(e) => handlePeopleLname(index, e.target.value)}
                  />
                </Stack>

                <IconButton
                  className={styles["remove-btn"]}
                  onClick={() => handleRemove(index)}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </Stack>
            ))}
          </Stack> : null}
          
        </Stack>
        <Button
          variant="contained"
          text="Submit"
          className={styles["submit-btn"]}
        />
      </Box>
    </Modal>
  );
};

export default RegistrationModel;
