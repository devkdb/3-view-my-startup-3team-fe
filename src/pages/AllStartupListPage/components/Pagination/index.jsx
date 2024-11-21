import "./index.css";
import img1 from "../../../../assets/images/icons/arrow/ic_arrow_left.png";
import img3 from "../../../../assets/images/icons/arrow/Image20241112162519.png";
import img2 from "../../../../assets/images/icons/arrow/ic_arrow_right.png";
import img4 from "../../../../assets/images/icons/arrow/Image20241112162513.png";
import { useState } from "react";

function Pagination() {
  const [leftImg, setLeftImg] = useState(img1);
  const [rightImg, setRightImg] = useState(img2);
  const handleLeftMouseEnter = () => {
    setLeftImg(img3); // hover 시 이미지 변경
  };
  const handleLeftMouseLeave = () => {
    setLeftImg(img1); // hover 종료 시 이미지 원래대로
  };
  const handleRightMouseEnter = () => {
    setRightImg(img4); // hover 시 이미지 변경
  };
  const handleRightMouseLeave = () => {
    setRightImg(img2); // hover 종료 시 이미지 원래대로
  };
  return (
    <div className="PaginationLayer">
      <button
        className="Btn"
        onMouseEnter={handleLeftMouseEnter}
        onMouseLeave={handleLeftMouseLeave}
      >
        {/* &lt; */}
        <img src={leftImg} alt="왼쪽 화살표" className="arrowimg" />
      </button>
      <div className="BtnLayer">
        <button className="InnerBtn">1</button>
        <button className="InnerBtn">2</button>
        <button className="InnerBtn">3</button>
        <button className="InnerBtn">4</button>
        <button className="InnerBtn">5</button>
      </div>
      <button
        className="Btn"
        onMouseEnter={handleRightMouseEnter}
        onMouseLeave={handleRightMouseLeave}
      >
        {/* &gt; */}
        <img src={rightImg} alt="오른쪽 화살표" className="arrowimg" />
      </button>
    </div>
  );
}

export default Pagination;
