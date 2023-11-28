import styles from "./Button.module.css";
import { default as MuiButton } from "@mui/material/Button";
import cx from "classnames";
import ButtonProps from "@/interfaces/button";

const Button = ({
  children,
  variant = "default",
  startIcon,
  endIcon,
  href,
  className,
  disabled,
  onClick,
}: ButtonProps) => {
  const classNames = cx(styles.button, styles[`button-${variant}`], className, {
    [styles.disabled]: disabled,
  });
  return (
    <MuiButton
      className={classNames}
      startIcon={startIcon}
      endIcon={endIcon}
      href={href}
      sx={{ fontWeight: 600 }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
