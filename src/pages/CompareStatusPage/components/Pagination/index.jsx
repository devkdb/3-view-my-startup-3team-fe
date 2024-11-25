import React, { useState } from "react";
import img1 from "../../../../assets/images/icons/arrow/ic_arrow_left.png";
import img3 from "../../../../assets/images/icons/arrow/Image20241112162519.png";
import img2 from "../../../../assets/images/icons/arrow/ic_arrow_right.png";
import img4 from "../../../../assets/images/icons/arrow/Image20241112162513.png";
import "./index.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [leftImg, setLeftImg] = useState(img1);
  const [rightImg, setRightImg] = useState(img2);

  const handleLeftMouseEnter = () => setLeftImg(img3);
  const handleLeftMouseLeave = () => setLeftImg(img1);
  const handleRightMouseEnter = () => setRightImg(img4);
  const handleRightMouseLeave = () => setRightImg(img2);

  const btnRange = 5;
  const startPage = Math.floor((currentPage - 1) / btnRange) * btnRange + 1;
  const endPage = Math.min(startPage + btnRange - 1, totalPages);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="CompareStatusPaginationLayer">
      <button
        className="CompareStatusBtn"
        onClick={handlePrevPage}
        onMouseEnter={handleLeftMouseEnter}
        onMouseLeave={handleLeftMouseLeave}
        disabled={currentPage === 1}
      >
        <img
          src={leftImg}
          alt="왼쪽 화살표 이미지"
          className="CompareStatusarrowimg"
        />
      </button>
      <div className="CompareStatusBtnLayer">
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const page = startPage + index;
          return (
            <button
              key={page}
              className={`CompareStatusInnerBtn ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => handlePageChange(page)}
              style={{
                backgroundColor:
                  currentPage === page ? "var(--brand_orange)" : "",
                color: currentPage === page ? "var(--white_100)" : "",
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        className="CompareStatusBtn"
        onClick={handleNextPage}
        onMouseEnter={handleRightMouseEnter}
        onMouseLeave={handleRightMouseLeave}
        disabled={currentPage === totalPages}
      >
        <img
          src={rightImg}
          alt="오른쪽 화살표 이미지"
          className="CompareStatusarrowimg"
        />
      </button>
    </div>
  );
}

export default Pagination;
