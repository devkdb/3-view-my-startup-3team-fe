import "./index.css";
import img1 from "../../../../assets/images/icons/arrow/ic_arrow_left.png";
import img3 from "../../../../assets/images/icons/arrow/Image20241112162519.png";
import img2 from "../../../../assets/images/icons/arrow/ic_arrow_right.png";
import img4 from "../../../../assets/images/icons/arrow/Image20241112162513.png";
import { useState } from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [leftImg, setLeftImg] = useState(img1);
  const [rightImg, setRightImg] = useState(img2);

  const handleLeftMouseEnter = () => setLeftImg(img3);
  const handleLeftMouseLeave = () => setLeftImg(img1);
  const handleRightMouseEnter = () => setRightImg(img4);
  const handleRightMouseLeave = () => setRightImg(img2);

 const handlePageClick =(page) => {
  if (page >= 1 && page <= totalPages) {
    onPageChange(page);
  }
 };

 const startPage = Math.max(1, currentPage -2);
 const endPage = Math.min(totalPages, startPage +4);

 const pageNumbers = Array.from(
  { length: endPage - startPage + 1 }, 
  (_, i) => startPage + i 
);

return (
  <div className="PaginationLayer">
    {" "}
    <button
      className="Btn"
      onMouseEnter={handleLeftMouseEnter} 
      onMouseLeave={handleLeftMouseLeave} 
      onClick={() => handlePageClick(currentPage - 1)} 
      disabled={currentPage <= 1}
    >
      <img src={leftImg} alt="왼쪽 화살표" className="arrowimg" />{" "}
    </button>
    <div className="BtnLayer">
      {" "}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber} 
          className={`${currentPage === pageNumber ? "pagenationActive" : ""} InnerBtn`} 
          onClick={() => handlePageClick(pageNumber)} 
        >
          {pageNumber}
        </button>
      ))}
    </div>
    <button
      className="Btn"
      onMouseEnter={handleRightMouseEnter}
      onMouseLeave={handleRightMouseLeave} 
      onClick={() => handlePageClick(currentPage + 1)} 
      disabled={currentPage >= totalPages} 
    >
      <img src={rightImg} alt="오른쪽 화살표" className="arrowimg" />{" "}
    </button>
  </div>
);
}

export default Pagination;