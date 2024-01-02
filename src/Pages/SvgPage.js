import { Curve } from "../Components/Curve";
import { Navbar } from "../Components/Navbar";
import { SwitchTransition } from "../Components/SwitchTransition";
export const SvgPage = ({ transition }) => {
  return (
    <SwitchTransition transition={transition}>
      <Navbar />
      <div className="page">
        <h1>SVG Page</h1>
      </div>
    </SwitchTransition>
  );
};
