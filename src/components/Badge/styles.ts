import { tv } from "tailwind-variants";

export const badge = tv({
  base: "text-blue-primary max-w-max py-[5px] px-5",
  variants: {
    color: {
      primary: "bg-white",
      secondary: "bg-blue-primary text-white",
    },
  },
});
