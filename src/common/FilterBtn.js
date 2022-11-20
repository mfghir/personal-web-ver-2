import React, { useEffect } from "react";
import { t } from "i18next";
import styled from "styled-components";

const FilterBtn = ({ setActiveFilter, activeFilter, setFilterWork, works }) => {
  useEffect(() => {
    if (activeFilter === "All") {
      setFilterWork(works);
      return;
    }
    const filtered = works.filter((item) => item.title.includes(activeFilter));
    setFilterWork(filtered);
  }, [activeFilter, setFilterWork, works]);

  return (
    <BtnStyles>
      <div className="btns">

        {/* v.1 👇 */}
        {/* {[t("btnAll"), "Web", "React", "Js", "UI"].map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveFilter(item)}
            className={` ${activeFilter === item ? "activeBtn" : ""}`}
          >
            {item}
          </div>
        ))} */}

        {/* v.2 👇 - weith translate */}
        <div
          onClick={() => setActiveFilter("All")}
          className={` ${activeFilter === "All" ? "activeBtn" : ""}`}
        >
          {t("btnAll")}
        </div>

        <div
          onClick={() => setActiveFilter("Web")}
          className={` ${activeFilter === "Web" ? "activeBtn" : ""}`}
        >
          {t("btnWeb")}
        </div>

        <div
          onClick={() => setActiveFilter("React")}
          className={` ${activeFilter === "React" ? "activeBtn" : ""}`}
        >
          {t("btnReact")}
        </div>

        <div
          onClick={() => setActiveFilter("Js")}
          className={` ${activeFilter === "Js" ? "activeBtn" : ""}`}
        >
          {t("btnJs")}
        </div>

        <div
          onClick={() => setActiveFilter("UI")}
          className={` ${activeFilter === "UI" ? "activeBtn" : ""}`}
        >
          {t("btnUI")}
        </div>
      </div>
    </BtnStyles>
  );
};

export default FilterBtn;

const BtnStyles = styled.div`
  .btns {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    margin: 40px 0;
  }

  .btns div {
    cursor: pointer;
    padding: 8px;
    margin-right: 5px;

    color: var(--text-color);
    position: relative;
  }

  .btns div::after {
    content: "";
    display: block;
    width: 50%;

    height: 2px;
    position: absolute;
    left: 50%;

    transform: translate(-50%, -50%);
    transition: 0.4s;
    overflow: hidden;
  }

  .btns div:hover::after {
    width: 100%;
  }

  .activeBtn {
    /* border-bottom: 2px solid #47a3da; */
    /* color: #000000; */
    color: rgb(250 82 82) !important;
  }
`;
