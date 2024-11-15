import "./index.css";
import img1 from "../../assets/images/icons/arrow/ic_arrow_left.png";
import img3 from "../../assets/images/icons/arrow/Image20241112162519.png";
import img2 from "../../assets/images/icons/arrow/ic_arrow_right.png";
import img4 from "../../assets/images/icons/arrow/Image20241112162513.png";
import { useState } from "react";

function ModalPagination() {
  const [modalLeftImg, setModalLeftImg] = useState(img1);
  const [modalRightImg, setModalRightImg] = useState(img2);
  const handleModalLeftMouseEnter = () => {
    setModalLeftImg(img3); // hover 시 이미지 변경
  };
  const handleModalLeftMouseLeave = () => {
    setModalLeftImg(img1); // hover 종료 시 이미지 원래대로
  };
  const handleModalRightMouseEnter = () => {
    setModalRightImg(img4); // hover 시 이미지 변경
  };
  const handleModalRightMouseLeave = () => {
    setModalRightImg(img2); // hover 종료 시 이미지 원래대로
  };
  return (
    <div className="ModalPaginationLayer">
      <button
        className="ModalBtn"
        onMouseEnter={handleModalLeftMouseEnter}
        onMouseLeave={handleModalLeftMouseLeave}
      >
        {/* &lt; */}
        <img src={modalLeftImg} alt="왼쪽 화살표" className="Modalarrowimg" />
      </button>
      <div className="ModalBtnLayer">
        <button className="ModalInnerBtn">1</button>
        <button className="ModalInnerBtn">2</button>
        <button className="ModalInnerBtn">3</button>
        <button className="ModalInnerBtn">4</button>
        <button className="ModalInnerBtn">5</button>
      </div>
      <button
        className="ModalBtn"
        onMouseEnter={handleModalRightMouseEnter}
        onMouseLeave={handleModalRightMouseLeave}
      >
        {/* &gt; */}
        <img
          src={modalRightImg}
          alt="오른쪽 화살표"
          className="Modalarrowimg"
        />
      </button>
    </div>
  );
}

export default ModalPagination;
