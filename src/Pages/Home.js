import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
export default Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Navbar />
      <h1>Home</h1>
    </div>
  );
};
