import React from "react";
import "../css/Navbar.css";
import { img } from "../assets";

import MenuMobile from "../common/MenuMobile";
import { NavLink } from "react-router-dom";
import DarkMood from "../common/DarkMood";

import { t } from "i18next";
import {
  TbHome,
  TbUser,
  TbNotes,
  TbBrandCodesandbox,
  TbPhone,
} from "react-icons/tb";

const Navbar = ({ handleOnclick }) => {
  return (
    <div className="navbar-container">
      <div>
        <img src={img.logo} alt="logo" />
        <div className="languages">
          <button value="fa" onClick={handleOnclick} />
          <button value="en" onClick={handleOnclick} />
          <button value="ko" onClick={handleOnclick} />
        </div>
      </div>

      <div>
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TbHome />
              {t("home")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TbUser />
              {t("aboutme")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TbNotes />
              {t("resume")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/portfolios"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TbBrandCodesandbox />
              {t("portfolios")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TbPhone />
              {t("contact")}
            </NavLink>
          </li>
        </ul>

        <DarkMood />

        <MenuMobile />
      </div>
    </div>
  );
};

export default Navbar;
