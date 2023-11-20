const isEmpty = (value: string) => {
  if (!value || value === "") return true;
  return false;
};

const textValidation = (value: string) => {
  if (isEmpty(value)) {
    return {
      error: true,
      message: "This field is required",
    };
  }

  return {
    error: false,
    message: "",
  };
};

const emailValidation = (value: string) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (isEmpty(value)) {
    return {
      error: true,
      message: "This field is required",
    };
  }

  if (!value.match(emailRegex)) {
    return {
      error: true,
      message: "Invalid email address",
    };
  }

  return {
    error: false,
    message: "",
  };
};

const phoneValidation = (value: string) => {
  const phoneRegex = /(\+49|0)[1-9]{1}[0-9]{9,14}/g;

  if (isEmpty(value)) {
    return {
      error: true,
      message: "This field is required",
    };
  }

  if (!value.match(phoneRegex)) {
    return {
      error: true,
      message: "Invalid phone number! Start with 0 or +49",
    };
  }

  return {
    error: false,
    message: "",
  };
};

export { isEmpty, textValidation, emailValidation, phoneValidation };
