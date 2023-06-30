import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import logo from "../images/smallkidslogo.jpg";
import "./Navbar.css";

function Navbar() {
  // for login status and logout function
  const { user, logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toggleMobileMenu();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  // for mobile hamburger menue
  const [isShown, setIsShown] = useState(false);

  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };
  const hide = () => setIsShown(false);

  // Define MobileMenu component
  const MobileMenu = () => {
    return (
      <nav className={"mobile-menu"}>
        <img src={logo} alt="Logo" width="30" />
        <Link to="/" onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMobileMenu}>
          About
        </Link>
        <Link to="/contact" onClick={toggleMobileMenu}>
          Contact
        </Link>

        {/* extend navbar along login status of user */}
        {user ? (
          <div className={"member"}>
            <Link to="/memberone" onClick={toggleMobileMenu}>
              MemberOne
            </Link>
            <Link to="/membertwo" onClick={toggleMobileMenu}>
              MemberTwo
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" onClick={toggleMobileMenu}>
            Login
          </Link>
        )}
      </nav>
    );
  };

  return (
    <div className="topnav">
      <img src={logo} alt="Logo" />
      {/* Desktop Menu, which only appears on large screens */}
      <nav className="menu">
        {/* <div className="active-link"> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {/* extend navbar along login status of user */}
        {user ? (
          <div>
            <Link to="/qualification">Qualification</Link>
            <Link to="/search">Search</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {/* </div> */}
      </nav>

      {/* This hamburger button only shows up on small screens. It is used to open the mobile menu */}
      <button className="show-mobile-menu-button" onClick={toggleMobileMenu}>
        &#8801;
      </button>

      {/* redering the mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className="close-mobile-menu-button" onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </div>
  );
}

export default Navbar;
