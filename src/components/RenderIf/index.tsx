import { Fragment } from "react";

interface RenderIf {
  condition?: boolean;
  children: React.ReactNode;
}

export function RenderIf({ condition, children }: RenderIf) {
  if (condition) {
    return <Fragment>{children}</Fragment>;
  }

  return <Fragment />;
}
