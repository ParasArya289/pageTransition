import { Inter } from "./Inter";
import { Stairs } from "./Stairs";
import { Curve } from "./Curve";

export const SwitchTransition = ({ transition, children }) => {
  switch (transition) {
    case "inter":
      return <Inter>{children}</Inter>;
    case "stairs":
      return <Stairs>{children}</Stairs>;
    case "curve":
      return <Curve>{children}</Curve>;
  }
};
