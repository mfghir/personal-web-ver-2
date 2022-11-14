import React, { useState } from "react";
import styled from "styled-components";
import { t } from "i18next";

import "./MenuMobile.css";
import { NavLink } from "react-router-dom";
import {
  TbHome,
  TbUser,
  TbFileText,
  TbBrandCodesandbox,
  TbPhone,
} from "react-icons/tb";

const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  const openMenu1 = {
    transform: open ? " rotate(45deg)" : " rotate(0)",
  };
  const openMenu2 = {
    transform: open ? "translateX(-100%)" : "translateX(0)",
    opacity: open ? 0 : 1,
    margin: "3px 0",
  };
  const openMenu3 = {
    transform: open ? " rotate(-45deg)" : " rotate(0)",
  };

  return (
    <div className="menuMobile-container">
      <span className="bars">
        <ul onClick={() => setOpen(!open)}>
          <li style={openMenu1}></li>
          <li style={openMenu2}></li>
          <li style={openMenu3}></li>
        </ul>
      </span>

      <Show open={open}>
        <ul className="menu-mobile">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TbHome />
              <span> {t("home")} </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TbUser />
              <span> {t("aboutme")} </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TbFileText />
              <span> {t("resume")} </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/portfolios"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TbBrandCodesandbox />
              <span> {t("portfolios")} </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <TbPhone />
              <span> {t("contact")} </span>
            </NavLink>
          </li>
        </ul>
      </Show>
    </div>
  );
};

const Show = styled.div`
  .menu-mobile {
    right: ${(props) => (props.open ? "0" : "-100%")};
  }
`;

export default MenuMobile;
