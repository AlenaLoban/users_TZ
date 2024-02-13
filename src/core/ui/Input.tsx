import { MouseEventHandler } from "react";
import { forwardRef } from "react";

interface InputProps {
  ref?: HTMLInputElement;
  onClick?: MouseEventHandler;
  className?: string;
  placeholder?: string;

  type?:
    | "password"
    | "text"
    | "radio"
    | "checkbox"
    | "button"
    | "reset"
    | "submit";
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <input {...props} ref={ref}></input>;
});

export default Input;
