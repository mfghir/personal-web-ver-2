import React, { useEffect, useState } from "react";
import "../css/Resume.css";
import { t } from "i18next";

import { TbBriefcase, TbSchool } from "react-icons/tb";
import ProgressBar from "../common/ProgressBar";

const Resume = () => {
  const skillsData = [
    { name: "Html/Css", bgcolor: "#FF6464", completed: 100 },
    { name: "Scss/Sass", bgcolor: "#9272D4", completed: 95 },
    { name: "Js", bgcolor: "#5185D4", completed: 90 },
    { name: "React", bgcolor: "#CA56F2", completed: 70 },
    { name: "Redux", bgcolor: "#cf8585", completed: 60 },
    { name: "GraphQL", bgcolor: "#39bce3", completed: 90 },
    { name: "UI", bgcolor: "#a87db6", completed: 50 },
  ];

  const langData = [
    { name: t("farsi"), bgcolor: "#FF6464", completed: 100 },
    { name: t("english"), bgcolor: "#9272D4", completed: 90 },
    { name: t("korean"), bgcolor: "#5185D4", completed: 50 },
  ];

  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="resume-container container">
      <div className="title">
        <h1>{t("resume")}</h1>
        <span></span>
      </div>

      <section className="education">
        <div>
          <TbSchool />
          <h2>{t("education")}</h2>
        </div>

        <ul>
          <li>
            <span>{t("educationYearTwo")}</span>
            <strong>{t("educationTitleTwo")}</strong>
            <p>{t("educationTextTwo")}</p>
          </li>

          <li>
            <span>{t("educationYear")}</span>
            <strong>{t("educationTitle")}</strong>
            <p>{t("educationText")}</p>
          </li>
        </ul>
      </section>

      <section className="experience">
        <div>
          <TbBriefcase />
          <h2>{t("experience")}</h2>
        </div>

        <ul>
          <li>
            <span>{t("experienceYearTwo")}</span>
            <strong>{t("experienceTitleTwo")}</strong>
            <p>{t("experienceTextTwo")}</p>
          </li>

          <li>
            <span>{t("experienceYear")}</span>
            <strong>{t("experienceTitle")}</strong>
            <p>{t("experienceText")}</p>
          </li>

          <li>
            <span>{t("experienceYearThree")}</span>
            <strong>{t("experienceTitleThree")}</strong>
            <p>{t("experienceTextThree")}</p>
          </li>
        </ul>
      </section>

      <section className="skills">
        <h2>{t("mySkills")}</h2>

        {skillsData.map((item, idx) => (
          <ProgressBar
            key={idx}
            name={item.name}
            bgcolor={item.bgcolor}
            done={item.completed}
          />
        ))}
      </section>

      <section className="langs">
        <h2>{t("languages")}</h2>

        {langData.map((item, idx) => (
          <ProgressBar
            key={idx}
            name={item.name}
            bgcolor={item.bgcolor}
            done={item.completed}
          />
        ))}
      </section>
    </div>
  );
};

export default Resume;
