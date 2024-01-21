import React, { useState } from "react";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Navbar() {
  const isMobile = window.screen.width < 768;
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <NavbarContainer>
      <nav className="nav">
        <a href="/" className="nav__brand">
          Sko & nyckel service
        </a>

        <ul className={active}>
          {isMobile && <p>Information</p>}
          <li className="nav__item">
            <div className="link_container">
              <a href="/about" className="nav__link">
                Om oss
                {isMobile && (
                  <ArrowForwardIosIcon className="nav__link_arrow" />
                )}
              </a>
            </div>
          </li>

          <li className="nav__item">
            <div className="link_container">
              {" "}
              <a href="/contact" className="nav__link">
                Kontakta oss
                {isMobile && (
                  <ArrowForwardIosIcon className="nav__link_arrow" />
                )}
              </a>
            </div>
          </li>

          <li className="nav__item">
            <div className="link_container">
              {" "}
              <a href="/services" className="nav__link">
                Lagningar & Priser
                {isMobile && (
                  <ArrowForwardIosIcon className="nav__link_arrow" />
                )}
              </a>
            </div>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </NavbarContainer>
  );
}
export default Navbar;
export const NavbarContainer = styled.div`
  width: 100%;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    letter-spacing: 0.5px;
    color: white;
    font-size: 20px;
    &:hover {
      color: #848586;
      transition: 0.3s ease-in;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8vh;
    background-color: transparent;
  }
  .nav__brand {
    margin-top: 0.5em;
  }
  .logo {
    width: "100%";
    height: 60px;
    &:hover {
      border: 2px solid #757b9c;
    }
  }

  .nav__menu {
    display: flex;
    gap: 3rem;
  }
  .nav__toggler {
    display: none;
  }

  .nav__toggler div {
    width: 2.5rem;
    height: 0.2rem;
    margin: 0.4rem;
    background: rgb(204, 204, 204);
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 768px) {
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 8vh;
      background-color: #faf9f9fb;
    }

    .nav__brand {
      text-align: center;
      margin-left: 7em;
      color: #46495c;
    }
    .nav__toggler {
      display: block;
      cursor: pointer;
    }
    .nav__menu {
      z-index: 999;
      position: fixed;
      top: 6.1vh;
      right: 0;
      height: 96vh;
      width: 65vw;
      background-color: #faf9f9fb;
      flex-direction: column;
      transform: translateX(100%);
      transition: 0.5s ease-in;
    }
    .nav__item {
      margin-top: 1.7rem;
    }
    .nav__menu {
      gap: 0rem;
    }

    .nav__link_divider {
      margin-top: 1em;
      margin-right: 2em;
    }
    .nav__link {
      letter-spacing: 0.5px;
      display: flex;
      justify-content: space-between;
      display: flex;
      margin-right: 2rem;
      color: #46495c;
    }

    .nav_auth_links {
      width: 87%;
      bottom: 0;
      margin-bottom: 5em;
      position: absolute;
    }
    p {
      font-size: 1.2em;
      color: #46495c;
      font-weight: bold;
    }
    .nav__link_arrow {
      font-size: 1em;
    }
  }

  /* Active Class */
  .nav__active {
    transform: translateX(0%);
  }

  /* Toggle Icon Animation */

  .toggle .line1 {
    width: 2.2rem;
    transform: rotate(-45deg) translate(-4px, 6px);
  }
  .toggle .line2 {
    opacity: 0;
  }
  .toggle .line3 {
    width: 2.2rem;
    transform: rotate(45deg) translate(-4px, -6px);
  }
`;
