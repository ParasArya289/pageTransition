import { Navbar } from "../Components/Navbar";
import { Stairs } from "../Components/Stairs";
export const StairsPage = () => {
  return (
    <Stairs>
      <Navbar />
      <div className="demo">
        <h1>Stairs Page</h1>
      </div>
    </Stairs>
  );
};
