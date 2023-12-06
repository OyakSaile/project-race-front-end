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
        "text-gray-300  flex items-center gap-2",
        breakWord && "flex-col items-start gap-1",
        className
      )}
    >
      {title && <p>{title}</p>}
      <span className="font-bold">{text}</span>
      {children}
    </div>
  );
};
