import { FC, MouseEventHandler } from "react";
import classNames from "classnames";
import "./button.scss";

interface ButtonProps {
  className?: string;
  variant?: "contained" | "outlined";
  label: string;
  full_width?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
  className,
  variant = "contained",
  label,
  full_width,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "button",
        `button--${variant}`,
        full_width && "button--fullwidth",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
