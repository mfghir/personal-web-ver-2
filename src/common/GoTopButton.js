import React, { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import styled from "styled-components";

const GoTopButton = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 1000);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <BtnStyle>
      <button
        type="button"
        className={showGoTop ? "goTop" : "goTopHidden"}
        onClick={handleScrollUp}
      >
        <BsChevronUp />
      </button>
    </BtnStyle>
  );
};

export default GoTopButton;

const BtnStyle = styled.div`
  .goTopHidden {
    opacity: 0;
    display: none;
    animation: slide-down 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .goTop {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    background: rgba(252, 248, 241, 0.8);
    /* box-shadow: 2px 2px 5px gray; */

    width: 40px;
    height: 40px;
    border-radius: 25px;

    outline: none;
    border: none;
    font-size: 22px;

    right: 3%;
    cursor: pointer;
    animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    transition: 0.4s;
    z-index: 99;
  }

  .goTop:hover {
    color: #fcf8f1cc;
    background: #808080;
  }

  @keyframes slide-top {
    0% {
      opacity: 0;
      bottom: -2%;
    }

    100% {
      opacity: 1;
      bottom: 5%;
    }
  }

  @keyframes slide-down {
    0% {
      opacity: 1;
      bottom: 5%;
    }

    100% {
      opacity: 0;
      bottom: -2%;
    }
  }
`;
