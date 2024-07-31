import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface InfoProps {
  title?: string | ReactNode | number;
  text?: string | ReactNode | number;
  children?: ReactNode;
  breakWord?: boolean;
  className?: string;
}
export const Info = ({
  text,
  title,
  children,
  breakWord,
  className,
}: InfoProps) => {
  return (
    <div
      className={twMerge(
        "flex items-center gap-2 font-inter",
        breakWord && "flex-col items-start gap-1",
        className
      )}
    >
      {title && <p className="text-white/70 font-normal text-xs">{title}</p>}
      <span className="font-bold text-xs uppercase font-inter text-white shadowText">
        {text}
      </span>
      {children}
    </div>
  );
};
