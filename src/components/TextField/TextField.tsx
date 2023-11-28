"use client";

import { useState, useEffect } from "react";
import { default as MuiTextField } from "@mui/material/TextField";
import {
  emailValidation,
  phoneValidation,
  textValidation,
} from "@/utils/validations";
import TextFieldProps from "@/interfaces/textField";

const TextField = ({
  value,
  label,
  onChange,
  type,
  onError,
  onErrorOff,
}: TextFieldProps) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const handleValidation = () => {
    let result: { error: boolean; message: string } = {
      error: false,
      message: "",
    };

    if (type === "text") {
      result = textValidation(value);
    } else if (type === "email") {
      result = emailValidation(value);
    } else if (type === "phone") {
      result = phoneValidation(value);
    }

    setError(result.error);
    setMessage(result.message);
  };

  useEffect(() => {
    if (value) {
      handleValidation();
    }
  }, [value]);

  useEffect(() => {
    if (error && onError) {
      onError();
    }
    if (!error && onErrorOff) {
      onErrorOff();
    }
  }, [error]);

  return (
    <MuiTextField
      variant="outlined"
      value={value}
      label={label}
      onChange={onChange}
      error={error}
      helperText={message}
      onBlur={handleValidation}
    />
  );
};

export default TextField;
