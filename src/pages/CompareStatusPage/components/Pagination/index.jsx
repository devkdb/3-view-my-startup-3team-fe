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

  // 페이지 범위 계산 (5개씩 묶음으로 페이지 버튼을 표시)
  const btnRange = 5; // 한 묶음에 표시할 페이지 버튼 수
  const startPage = Math.floor((currentPage - 1) / btnRange) * btnRange + 1; // 현재 페이지가 속한 묶음의 시작 페이지
  const endPage = Math.min(startPage + btnRange - 1, totalPages); // 묶음의 끝 페이지

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page); // 클릭한 페이지로 이동
    }
  };

  // '>' 버튼 클릭 시, 현재 페이지가 속한 묶음에서 1페이지씩 증가
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1); // 한 페이지씩 증가
    }
  };

  // '<' 버튼 클릭 시, 현재 페이지가 속한 묶음에서 1페이지씩 감소
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1); // 한 페이지씩 감소
    }
  };

  return (
    <div className="CompareStatusPaginationLayer">
      <button
        className="CompareStatusBtn"
        onClick={handlePrevPage}
        onMouseEnter={handleLeftMouseEnter}
        onMouseLeave={handleLeftMouseLeave}
        disabled={currentPage === 1} // 첫 번째 페이지에서는 '<' 비활성화
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
        disabled={currentPage === totalPages} // 마지막 페이지에서는 '>' 비활성화
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
