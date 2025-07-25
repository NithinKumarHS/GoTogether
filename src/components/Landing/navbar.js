import React from "react";
import { useNavigate,Link } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
      <Link to="/Home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Us">Us</Link>
      <Link to="/contact">Contact</Link>
        {/* Using button with navigate hook */}
        <button className="primary-button" onClick={() => navigate("/login")}>
          Login &nbsp; or &nbsp; Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
