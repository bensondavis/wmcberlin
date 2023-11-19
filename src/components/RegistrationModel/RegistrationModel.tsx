"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./RegistrationModel.module.css";
import cx from "classnames";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import TextField from "../TextField/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
import Button from "../Button/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { BASE_API_URL } from "@/utils/constants";
import { isEmpty } from "@/utils/validations";

export interface People {
  fname: string;
  lname: string;
}

interface RegistrationModelProps {
  open: boolean;
  onClose: () => void;
  type: "Student" | "Family" | "Single";
}

const RegistrationModel = ({ open, onClose, type }: RegistrationModelProps) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [job, setJob] = useState("");
  const [peoples, setPeoples] = useState<People[]>([{ fname: "", lname: "" }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean[]>([]);
  const [disabled, setDisabled] = useState(true);
  const [snackBar, setSnackBar] = useState({
    open: false,
    type: "success",
    message: "",
  });

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

  const handleReset = () => {
    setFname("");
    setLname("");
    setEmail("");
    setPhn("");
    setJob("");
    setPeoples([{ fname: "", lname: "" }]);
    setDisabled(true);
  };

  const handleAddError = () => {
    setError([...error, true]);
  };

  const handleRemoveError = () => {
    const errors = [...error];
    errors.pop();
    setError(errors);
  };

  const handleSubmit = () => {
    if (!fname && !lname && !email && !phn) return;
    setLoading(true);
    axios
      .post(
        `${BASE_API_URL}/api/submit`,
        {
          type: type,
          fname: fname,
          lname: lname,
          email: email,
          phn: phn,
          job: job,
          peoples: peoples,
        },
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        onClose();
        handleReset();
        setLoading(false);
        setSnackBar({
          open: true,
          type: "success",
          message: "Registration Submitted",
        });
      })
      .catch((err) => {
        console.log({ err });
        setLoading(false);
        setSnackBar({
          open: true,
          type: "error",
          message: "An error occurred. Please try again!",
        });
      });
  };

  useEffect(() => {
    if (fname && lname && email && phn && type === "Student") {
      setDisabled(false);
    }
    if (fname && lname && email && phn && job && type === "Single") {
      setDisabled(false);
    }
  }, [fname, lname, email, phn]);

  return (
    <>
      <Dialog open={open} onClose={onClose} className={cx(styles.modal)}>
        <Box className={styles.card}>
          <IconButton className={styles.cancel} onClick={onClose}>
            <CancelIcon />
          </IconButton>
          <Typography className={styles.title}>Register</Typography>
          <Stack direction={"column"} spacing={3}>
            <TextField
              label="First Name"
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              onError={handleAddError}
              onErrorOff={handleRemoveError}
            />
            <TextField
              label="Last Name"
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              onError={handleAddError}
              onErrorOff={handleRemoveError}
            />
            {type !== "Student" ? (
              <TextField
                label="Occupation"
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                onError={handleAddError}
                onErrorOff={handleRemoveError}
              />
            ) : null}
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              onError={handleAddError}
              onErrorOff={handleRemoveError}
            />
            <TextField
              label="Phone no."
              type="phone"
              value={phn}
              onChange={(e) => setPhn(e.target.value)}
              onError={handleAddError}
              onErrorOff={handleRemoveError}
            />

            {type === "Family" ? (
              <Stack direction={"column"} spacing={3}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  sx={{ pl: 1 }}
                >
                  <Typography>Add People</Typography>
                  <IconButton
                    onClick={handleAddPeople}
                    className={styles["add-btn"]}
                  >
                    <AddCircleIcon />
                  </IconButton>
                </Stack>
                {peoples.map((data, index) => (
                  <Stack
                    key={index}
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
                        type="text"
                        value={data.fname}
                        onChange={(e) =>
                          handlePeopleFname(index, e.target.value)
                        }
                        onError={handleAddError}
                        onErrorOff={handleRemoveError}
                      />
                      <TextField
                        label="Last Name"
                        type="text"
                        value={data.lname}
                        onChange={(e) =>
                          handlePeopleLname(index, e.target.value)
                        }
                        onError={handleAddError}
                        onErrorOff={handleRemoveError}
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
              </Stack>
            ) : null}
          </Stack>
          <Button
            variant="contained"
            className={styles["submit-btn"]}
            onClick={handleSubmit}
            disabled={disabled || error.length > 0}
          >
            Submit
          </Button>
        </Box>
      </Dialog>
      <Backdrop sx={{ color: "#fff", zIndex: 11 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackBar.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnackBar({
            open: false,
            type: snackBar.type,
            message: "",
          })
        }
      >
        <Alert
          onClose={() =>
            setSnackBar({
              open: false,
              type: snackBar.type,
              message: "",
            })
          }
          severity={snackBar.type as keyof typeof Alert}
          sx={{ width: "100%" }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default RegistrationModel;
