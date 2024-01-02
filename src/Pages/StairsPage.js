import { Navbar } from "../Components/Navbar";
import { Stairs } from "../Components/Stairs";
import { SwitchTransition } from "../Components/SwitchTransition";
export const StairsPage = ({ transition }) => {
  return (
    <SwitchTransition transition={transition}>
      <Navbar />
      <div className="page">
        <h1>Stairs Page</h1>
      </div>
    </SwitchTransition>
  );
};
