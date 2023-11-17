import styles from "./Button.module.css";
import { default as MuiButton } from "@mui/material/Button";
import cx from "classnames";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "contained" | "standard";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "default",
  startIcon,
  endIcon,
  href,
  className,
  onClick,
}: ButtonProps) => {
  const classNames = cx(styles.button, styles[`button-${variant}`], className);
  return (
    <MuiButton
      className={classNames}
      startIcon={startIcon}
      endIcon={endIcon}
      href={href}
      sx={{ fontWeight: 600 }}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
