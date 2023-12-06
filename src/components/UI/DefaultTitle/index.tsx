import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type DefaultTitleProps = ComponentProps<"h1"> & {
  title?: string;
};
export const DefaultTitle = ({
  className,
  title,
  children,
  ...rest
}: DefaultTitleProps) => {
  return (
    <h1
      className={twMerge(
        "text-gray-300 font-bold font-inter text-xl",
        className
      )}
      {...rest}
    >
      {title ? title : ""}
      {children}
    </h1>
  );
};
