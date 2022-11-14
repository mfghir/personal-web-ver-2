import React from "react";
import styled from "styled-components";

const ProgressBar = ({ done, bgcolor, name }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <ProgressDiv bgcolor={bgcolor}>
      <div className="name">
        <h5>{name}</h5> <p>{done}%</p>
      </div>

      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </ProgressDiv>
  );
};

export default ProgressBar;

const ProgressDiv = styled.div`
  margin: 15px 0;
  font-family: "Poppins", sans-serif;

  .name {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;
  }
  .progress {
    background-color: var(--bg-progress);
    border-radius: 20px;
    position: relative;

    height: 6px;
  }

  .progress-done {
    background: ${(props) => props.bgcolor};
    border-radius: 20px;
    opacity: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 0;
    height: 100%;
    transition: 3s ease 0.3s;
  }
`;
