import React from "react";
import { IconButton } from "@mui/material";

interface Props {
  icon: React.ReactElement;
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "clear";
  className?: string;
  disabled?: Boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonSize = {
  small: "px-2 py-2",
  medium: "px-4 py-4",
  large: "px-6 py-6",
};

// const ButtonStyle: { outlined: React.CSSProperties } = {
//   outlined: {
//     border: "1px solid rgba(51, 83, 31, 0.08)",
//   },
// };
const ButtonTypes = {
  contained: "bg-primary-brand shadow-brand-primary-base",
  outlined: "",
  secondary: "bg-button-background-secondary-onSurface",
  clear: "",
};

const _IconButton: React.FC<Props> = ({
  icon,
  variant = "contained",
  className = "",
  size = "medium",
  onClick,
}) => {
  const classNames: string = `rounded-lg ${ButtonTypes[variant]} ${ButtonSize[size]} ${className}`;
  // const styles: React.CSSProperties = ButtonStyle[
  //   variant
  // ] as React.CSSProperties;

  return (
    <IconButton className={`${classNames}`} onClick={onClick}>
      {icon}
    </IconButton>
  );
};

export default _IconButton;
