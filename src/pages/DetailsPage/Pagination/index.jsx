import styles from "./index.module.css";
import arrowLeftIcon from "../../../assets/images/icons/arrow/ic_arrow_left.png";
import arrowRightIcon from "../../../assets/images/icons/arrow/ic_arrow_right.png";

const MAX_PAGE_DISPLAY = 5; // 한 번에 보여줄 페이지 수

// 페이지 번호 버튼과 이전/다음 그룹 버튼을 표시
// 페이지 변경 시 onPageChange 콜백을 호출
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  pageButtonSize,
  pageButtonBorderRadius,
  pageButtonFontSize,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const maxPageDisplay = MAX_PAGE_DISPLAY;
  const pageNumbers = [];

  // 페이지 그룹 계산
  const currentGroup = Math.ceil(currentPage / maxPageDisplay);
  const startPage = (currentGroup - 1) * maxPageDisplay + 1; // 시작 페이지 번호
  const endPage = Math.min(totalPages, startPage + maxPageDisplay - 1); // 끝 페이지 번호

  console.log(
    `currentGroup:${currentGroup}, startPage:${startPage}, endPage:${endPage}`
  );

  // 페이지 번호 추가
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // 이전 그룹 버튼 핸들러
  const handlePrevGroupClick = () => {
    const newStartPage = startPage - maxPageDisplay;
    if (newStartPage > 0) {
      onPageChange(newStartPage + maxPageDisplay - 1); // 이전 그룹의 마지막 페이지로 이동
    }
  };

  // 다음 그룹 버튼 핸들러
  const handleNextGroupClick = () => {
    const newStartPage = startPage + maxPageDisplay;
    if (newStartPage <= totalPages) {
      onPageChange(newStartPage); // 다음 그룹의 첫 번째 페이지로 이동
    }
  };

  // 인라인 스타일을 조건부로 설정
  const buttonStyle = (size, borderRadius, fontSize) => {
    // props가 전달된 경우에만 인라인 스타일을 적용
    const style = {};
    if (size) {
      style.width = size;
      style.height = size;
    }
    if (borderRadius) {
      style.borderRadius = borderRadius;
    }
    if (fontSize) {
      style.fontSize = fontSize;
    }
    return style;
  };

  return (
    <div className={styles.pagination}>
      {startPage > 1 && (
        <button
          className={`${styles.paginationButton} ${
            startPage <= 1 ? styles.paginationButtonDisabled : ""
          }`}
          onClick={handlePrevGroupClick}
          disabled={startPage <= 1} // 비활성화 처리
          style={buttonStyle(
            pageButtonSize,
            pageButtonBorderRadius,
            pageButtonFontSize
          )}
        >
          <img src={arrowLeftIcon} alt='Previous group' />
        </button>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`${styles.paginationButton} ${
            currentPage === page ? styles.paginationButtonActive : ""
          }`}
          onClick={() => {
            onPageChange(page); // 페이지 변경
          }}
          style={buttonStyle(
            pageButtonSize,
            pageButtonBorderRadius,
            pageButtonFontSize
          )}
          // aria-label={`Page ${page}`} // 접근성 개선
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <button
          className={`${styles.paginationButton} ${
            endPage >= totalPages ? styles.paginationButtonDisabled : ""
          }`}
          onClick={handleNextGroupClick}
          disabled={endPage >= totalPages} // 비활성화 처리
          style={buttonStyle(
            pageButtonSize,
            pageButtonBorderRadius,
            pageButtonFontSize
          )}
        >
          <img src={arrowRightIcon} alt='Next' />
        </button>
      )}
    </div>
  );
};

export default Pagination;
