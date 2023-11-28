interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "contained" | "standard";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default ButtonProps;