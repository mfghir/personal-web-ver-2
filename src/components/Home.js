import React from "react";
import { img } from "../assets";
import "../css/Home.css";

import Typewriter from "typewriter-effect";
import { t } from "i18next";
import {
  TbBrandTelegram,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandGithub,
  TbBrandCodepen,
  TbBrandDribbble,
} from "react-icons/tb";

const Home = () => {
  return (
    <div className="home-container">
      <img src={img.avatar} alt="avatar" />
      <h1>{t("name")}</h1>
      <h2>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(2500).deleteAll().start();
          }}
          options={{
            strings: ["Web Developer", "UI Designer","Freelancer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <ul className="socials">
        <li>
          <a
            href="https://t.me/fatemeweb"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#00405d" }}
          >
            <TbBrandTelegram />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/fatemeweb/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#517fa4" }}
          >
            <TbBrandInstagram />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/fateme-ghafari"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#007bb6" }}
          >
            <TbBrandLinkedin />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/mfghir"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#00405d" }}
          >
            <TbBrandGithub />
          </a>
        </li>

        <li>
          <a
            href="https://codepen.io/miss_f_g/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#007bb6" }}
          >
            <TbBrandCodepen />
          </a>
        </li>

        <li>
          <a
            href="https://dribbble.com/mfghir"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#dd2476" }}
          >
            <TbBrandDribbble />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
