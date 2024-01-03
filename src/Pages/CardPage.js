import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import "./CardPage.css";
export const CardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="page cardPage">
        <div className="show-card" onClick={() => navigate("/show-card")}>
          {/* <img src="https://nick.computer/static/media/realas-lg.d9bab4ac14f036998f99.jpg" /> */}
        </div>
      </div>
    </>
  );
};
