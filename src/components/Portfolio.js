import React, { useState } from "react";
import { t } from "i18next";
import "../css/Portfolio.css";

import { PortfoliosData } from "../data/PortfoliosData";
import PortfolioItem from "./PortfolioItem";
import FilterBtn from "../common/FilterBtn";

const Portfolio = () => {
  const [works] = useState(PortfoliosData);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="portfolio-container  container">
      <div className="title">
        <h1>{t("portfolios")}</h1>
        <span></span>
      </div>

      <FilterBtn
        works={works}
        setFilterWork={setFilterWork}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <PortfolioItem filterWork={filterWork} />
    </div>
  );
};

export default Portfolio;
