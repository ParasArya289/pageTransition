import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Inter } from "../Components/Inter";
export default Home = () => {
  const navigate = useNavigate();

  return (
    <Inter>
      <div className="demo">
        <Navbar />
        <h1>Home Page</h1>
      </div>
    </Inter>
  );
};
