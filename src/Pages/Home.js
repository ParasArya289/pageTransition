import "./Page.css";
import { Navbar } from "../Components/Navbar";
import { Inter } from "../Components/Inter";
import { SwitchTransition } from "../Components/SwitchTransition";
export default Home = ({ transition }) => {
  return (
    <SwitchTransition transition={transition}>
      <div className="page">
        <Navbar />
        <h1>Home Page</h1>
      </div>
    </SwitchTransition>
  );
};
