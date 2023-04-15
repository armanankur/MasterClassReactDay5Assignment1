import React from "react";
import { Link } from "react-router-dom";
import styled from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styled.navbar}>
        <ul className={styled.navlink}>
          <li>
            <Link className={styled.link} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className={styled.link} to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
