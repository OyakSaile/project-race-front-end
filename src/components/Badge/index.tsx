import { badge } from "./styles";

interface BadgeProps {
  text?: string;
  variation?: BadgeVariation;
}

type BadgeVariation = "primary" | "secondary";

export function Badge({ text, variation = "primary" }: BadgeProps) {
  return (
    <div className={badge({ color: variation })}>
      <h1 className="font-medium font-monomaniac text-3xl leading-10 ">
        {text}
      </h1>
    </div>
  );
}
