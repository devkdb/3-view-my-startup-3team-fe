import "./index.css";
import img1 from "../../../assets/images/icons/arrow/ic_arrow_left.png";
import img3 from "../../../assets/images/icons/arrow/Image20241112162519.png";
import img2 from "../../../assets/images/icons/arrow/ic_arrow_right.png";
import img4 from "../../../assets/images/icons/arrow/Image20241112162513.png";
import { useState } from "react";

function PaginationCorrection({ currentPage, totalPages, onPageChange }) {
  // currentPage: 현재 활성화된 페이지 번호
  // totalPages: 전체 페이지 수
  // onPageChange: 페이지 변경 시 호출할 부모 컴포넌트의 콜백 함수

  const [leftImg, setLeftImg] = useState(img1); // 왼쪽 화살표
  const [rightImg, setRightImg] = useState(img2); // 오른쪽 화살표
  const [isHoveringRight, setIsHoveringRight] = useState(false); // 오른쪽 화살표 호버
  const [isHoveringLeft, setIsHoveringLeft] = useState(false); // 왼쪽 화살표 호버

  // 왼쪽 화살표 Hover 상태 관리
  const handleLeftMouseEnter = () => {
    setLeftImg(img3); // 호버 상태일 때 이미지 변경
    setIsHoveringLeft(true); // 호버 상태 활성화
  };

  const handleLeftMouseLeave = () => {
    setLeftImg(img1); // 기본 이미지로 복원
    setIsHoveringLeft(false); // 호버 상태 비활성화
  };

  // 오른쪽 화살표 Hover 상태 관리
  const handleRightMouseEnter = () => {
    setRightImg(img4); // 호버 상태일 때 이미지 변경
    setIsHoveringRight(true); // 호버 상태 활성화
  };

  const handleRightMouseLeave = () => {
    setRightImg(img2); // 기본 이미지로 복원
    setIsHoveringRight(false); // 호버 상태 비활성화
  };

  // 페이지 이동 처리 함수
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page); // 부모 컴포넌트로 새로운 페이지 번호 전달
    }
  };

  // 페이지 번호 계산 (페이지네이션 핸들러에서 총 8페이지 필요하다고 알 수 있음)
  const startPage = Math.max(1, currentPage - 2); // 현재 페이지 기준으로 이전 2개의 페이지 번호 계산
  // (쉽게 이해하자면 앞 두 개페이지를 보여 주고 음수가 안되도록 최소 1로 지정)
  const endPage = Math.min(totalPages, startPage + 4); // 현재 페이지 기준으로 최대 5개의 페이지 번호 표시
  // (쉽게 이해하자면 )

  // 페이지 번호 배열 생성
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 }, // 표시할 페이지 번호의 개수
    (_, i) => startPage + i // 페이지 번호 계산
  );

  return (
    <div className="PaginationLayer">
      {" "}
      <button
        className={`Btn ${isHoveringLeft ? "hovering" : ""}`} // 호버 상태에 따라 클래스 추가
        onMouseEnter={handleLeftMouseEnter} // 마우스가 버튼 위에 있을 때 호출
        onMouseLeave={handleLeftMouseLeave} // 마우스가 버튼에서 나갈 때 호출
        onClick={() => handlePageClick(currentPage - 1)} // 이전 페이지로 이동
        disabled={currentPage <= 1} // 첫 번째 페이지일 경우 버튼 비활성화
      >
        <img src={leftImg} alt="왼쪽 화살표" className="arrowimg" />{" "}
        {/* 현재 이미지 표시 */}
      </button>
      {/* 페이지 번호 버튼 */}
      <div className="BtnLayer">
        {" "}
        {/* 페이지 번호 버튼 컨테이너 */}
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber} // 페이지 번호를 고유 키로 사용
            className={`InnerBtn ${currentPage === pageNumber ? "active" : ""}`} // 현재 페이지에 강조 스타일 적용
            onClick={() => handlePageClick(pageNumber)} // 해당 페이지로 이동
          >
            {pageNumber} {/* 페이지 번호 표시 */}
          </button>
        ))}
      </div>
      {/* 오른쪽 화살표 버튼 */}
      <button
        className={`Btn ${isHoveringRight ? "hovering" : ""}`} // 호버 상태에 따라 클래스 추가
        onMouseEnter={handleRightMouseEnter} // 마우스가 버튼 위에 있을 때 호출
        onMouseLeave={handleRightMouseLeave} // 마우스가 버튼에서 나갈 때 호출
        onClick={() => handlePageClick(currentPage + 1)} // 다음 페이지로 이동
        disabled={currentPage >= totalPages} // 마지막 페이지일 경우 버튼 비활성화
      >
        <img src={rightImg} alt="오른쪽 화살표" className="arrowimg" />{" "}
        {/* 현재 이미지 표시 */}
      </button>
    </div>
  );
}

export default PaginationCorrection; // 컴포넌트 내보내기
