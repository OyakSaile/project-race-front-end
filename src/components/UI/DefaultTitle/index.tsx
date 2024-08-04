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
      {...rest}
      className={twMerge(
        "text-white font-monomaniac font-bold text-xs lg:text-xl",
        className
      )}
    >
      {title ? title : ""}
      {children}
    </h1>
  );
};
