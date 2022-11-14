import React from "react";
import { img } from "../assets";
import "../css/AboutMe.css";

import { t } from "i18next";
import {
  TbDeviceMobile,
  TbMapPin,
  TbMailOpened,
  TbCalendarEvent,
  TbColorSwatch,
  TbCode,
} from "react-icons/tb";

const AboutMe = () => {
  return (
    <div className="aboutme-container container">
      <div className="title">
        <h1>{t("aboutme")}</h1>
        <span></span>
      </div>

      <img src={img.about} alt="about" />

      <section>
        <h2>{t("aboutmeOne")}</h2>
        <p>{t("aboutmeTwo")}</p>

        <h2>{t("aboutme_personalInfo")}</h2>
        <ul className="personal-info">
          <li>
            <TbDeviceMobile style={{ color: "#E93B81" }} />
            <div>
              <span>{t("phone")}</span>
              <p>+98 9224585055</p>
            </div>
          </li>

          <li>
            <TbMapPin style={{ color: "#FD7590" }} />
            <div>
              <span>{t("locationTitle")}</span>
              <p>{t("locationText")}</p>
            </div>
          </li>

          <li>
            <TbMailOpened style={{ color: "#6AB5B9" }} />
            <div>
              <span>{t("email")}</span>
              <p>fatemeghafari77[@]gmail.com</p>
            </div>
          </li>
          <li>
            <TbCalendarEvent style={{ color: "#C17CEB" }} />
            <div>
              <span>{t("dob")}</span>
              <p>{t("dobA")}</p>
            </div>
          </li>
        </ul>

      </section>

      <section>
        <h2>{t("aboutme_whatDo")}</h2>
        <ul className="what-I-do">
          <li>
            <TbColorSwatch style={{ color: "#D566FF" }} />
            <div>
              <strong>{t("aboutme_whatDo_titleOne")}</strong>
              <p>{t("aboutme_whatDo_textOne")}</p>
            </div>
          </li>

          <li>
            <TbCode style={{ color: "#269FFF" }} />
            <div>
              <strong>{t("aboutme_whatDo_titleTwo")}</strong>
              <p>{t("aboutme_whatDo_textTwo")}</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;
