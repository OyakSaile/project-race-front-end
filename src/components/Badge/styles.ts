import { tv } from "tailwind-variants";

export const badge = tv({
  base: "text-blue-primary max-w-max py-[5px] px-5 rounded-[5px] max-w-max",
  variants: {
    color: {
      primary: "bg-white",
      secondary: "bg-blue-primary text-white",
    },
  },
});
