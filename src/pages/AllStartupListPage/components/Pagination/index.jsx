import "./index.css";

function Pagination({
  totalPages,
  currentPage,
  hasNextPage,
  currentPageHandler,
}) {

   // 페이지 번호 계산 (페이지네이션 핸들러에서 총 8페이지 필요하다고 알 수 있음)
   const startPage = Math.max(1, currentPage - 2); // 현재 페이지 기준으로 이전 2개의 페이지 번호 계산
   // (쉽게 이해하자면 앞 두 개페이지를 보여 주고 음수가 안되도록 최소 1로 지정)
  const endPage = Math.min(totalPages, startPage + 4); // 현재 페이지 기준으로 최대 5개의 페이지 번호 표시
  
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 }, // 표시할 페이지 번호의 개수
    (_, i) => startPage + i // 페이지 번호 계산
  );
  
  return (
    <div className="PaginationLayer">
      <button
        onClick={() => currentPageHandler(currentPage - 1)}
        className="leftArrowButton arrowImg"
        disabled={currentPage === 1}
      ></button>
      <div className="BtnLayer">
        {pageNumbers.map((pageNumber) => {
          return (
            <button
              className={`InnerBtn ${
                currentPage === pageNumber ? "currentPage" : ""
              }`}
              key={pageNumber}
              onClick={() => currentPageHandler(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => currentPageHandler(currentPage + 1)}
        className="rightArrowButton arrowImg"
        disabled={currentPage === totalPages}
      ></button>
    </div>
  );
}

export default Pagination;
