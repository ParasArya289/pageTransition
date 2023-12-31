import "./Navbar.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/inter">Inter</NavLink>
      <NavLink to="/stairs">Stairs</NavLink>
      <NavLink to="/svg">SVG</NavLink>
    </nav>
  );
};
