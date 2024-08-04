import { twMerge } from "tailwind-merge";
import { BarDivider } from "../BarDivider";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  hiddedDivider?: boolean;
  floatingTitle?: string;
}
export function Box({
  floatingTitle,
  hiddedDivider = false,
  ...props
}: BoxProps) {
  return (
    <div
      {...props}
      className={twMerge("w-[250px] 3xl:w-[437px]", props.className)}
    >
      <h2 className="text-white mb-2 text-base font-medium font-monomaniac tracking-wide">
        {floatingTitle}
      </h2>

      {!hiddedDivider && <BarDivider />}

      <div
        {...props}
        className={twMerge("bg-black/80 w-full h-full", props.className)}
      ></div>
    </div>
  );
}
