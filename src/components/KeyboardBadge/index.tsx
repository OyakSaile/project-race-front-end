import { twMerge } from "tailwind-merge";

interface KeyboardBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variation?: "primary" | "secondary";
  keyboard: string;
  description?: string;
}

export function KeyboardBadge({
  keyboard,
  description,
  ...props
}: KeyboardBadgeProps) {
  return (
    <div className={twMerge("flex gap-4 items-center", props.className)}>
      <h2 className="bg-blue-primary/50 text-white font-oswald py-1 px-2">
        {keyboard}
      </h2>
      <h3 className="text-white font-oswald text-base font-medium">
        {description}
      </h3>
    </div>
  );
}
