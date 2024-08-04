import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
  return (
    <button
      {...rest}
      type="submit"
      className={twMerge(
        "bg-blue-950/90 font-inter disabled:bg-gray-800 disabled:cursor-not-allowed disabled:text-gray-300 hover:bg-blue-950  transition-all text-white  font-bold w-full py-4 shadowText",
        className
      )}
    ></button>
  );
};
