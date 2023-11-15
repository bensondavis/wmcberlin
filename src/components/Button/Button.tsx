import styles from "./Button.module.css";
import { default as MuiButton } from "@mui/material/Button";
import cx from "classnames";
import { Key } from "react";

export interface ButtonProps {
  text: string;
  variant?: "default" | "contained" | "standard";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  href?: string;
  className?: string;
  myKey?: Key;
  onClick?: () => void;
}

const Button = ({
  text,
  variant = "default",
  startIcon,
  endIcon,
  href,
  className,
  myKey,
  onClick,
}: ButtonProps) => {
  const classNames = cx(styles.button, styles[`button-${variant}`], className);
  return (
    <MuiButton
      key={myKey}
      className={classNames}
      startIcon={startIcon}
      endIcon={endIcon}
      href={href}
      sx={{ fontWeight: 600 }}
      onClick={onClick}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
