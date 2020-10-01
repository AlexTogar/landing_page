import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link, BrowserRouter } from "react-router-dom";
import "./Navbar.css";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <BrowserRouter>
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <MdFingerprint className="navbar-icon" />
                LAVISH
              </Link>
            </BrowserRouter>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <BrowserRouter>
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </BrowserRouter>
              </li>
              <li className="nav-item">
                <BrowserRouter>
                  <Link
                    to="/services"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </BrowserRouter>
              </li>
              <li className="nav-item">
                <BrowserRouter>
                  <Link
                    to="/products"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Products
                  </Link>
                </BrowserRouter>
              </li>
              <li className="nav-btn">
                {button ? (
                  <BrowserRouter>
                    <Link to="/sign-up" className="btn-link">
                      <Button buttonStyle="btn--outline">SIGN UP</Button>
                    </Link>
                  </BrowserRouter>
                ) : (
                  <BrowserRouter>
                    <Link
                      to="/sign-up"
                      className="btn-link"
                      onClick={closeMobileMenu}
                    >
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--mobile"
                      >
                        SIGN UP
                      </Button>
                    </Link>
                  </BrowserRouter>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;