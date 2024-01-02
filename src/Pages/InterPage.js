import { Inter } from "../Components/Inter";
import { Navbar } from "../Components/Navbar";
import { SwitchTransition } from "../Components/SwitchTransition";
export const InterPage = ({ transition }) => {
  return (
    <SwitchTransition transition={transition}>
      <Navbar />
      <div className="page">
        <h1>Inter Page</h1>
      </div>
    </SwitchTransition>
  );
};
