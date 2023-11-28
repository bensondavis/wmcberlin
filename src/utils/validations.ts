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
  const phoneRegex = /(0|\+49)\d{11,17}/g;

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

  if (value.length > 15) {
    return {
      error: true,
      message: "Invalid phone number length!",
    };
  }

  return {
    error: false,
    message: "",
  };
};

export { isEmpty, textValidation, emailValidation, phoneValidation };
