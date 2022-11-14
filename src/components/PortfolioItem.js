import React from "react";
import { TbEye, TbBrandGithub } from "react-icons/tb";

const PortfolioItem = ({ filterWork }) => {
  return (
    <div className="portfolioItem-container">
      {filterWork.map((item) => {
        return (
          <div className="portfolioItem">
            <figure>
              <img src={item.imgUrl} alt={item.title} />
              <ul>
                <li>
                  <a href={item.gitLink} target="_blank" rel="noreferrer">
                    <TbBrandGithub />
                  </a>
                </li>
                <li>
                  <a href={item.netlifyLink} target="_blank" rel="noreferrer">
                    <TbEye />
                  </a>
                </li>
              </ul>
            </figure>

            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioItem;
