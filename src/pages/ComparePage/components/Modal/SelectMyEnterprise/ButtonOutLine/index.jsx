import { useState } from "react";
import "./index.css";

function BtnOutLine() {
  const [isSelected, setIsSelected] = useState(false);
  const toggleSelection = () => {
    setIsSelected((prevState) => !prevState);
  };
  return (
    <button
      className={`select-btn ${isSelected ? "selected" : ""}`}
      onClick={toggleSelection}
    >
      {isSelected ? "선택 해제" : "선택하기"}
    </button>
  );
}

export default BtnOutLine;
