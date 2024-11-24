import "./index.css";

function Pagination({
  totalPages,
  totalStartups,
  currentPage,
  hasNextPage,
  currentPageHandler,
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const pageMovementHandler = (page) => {
    if (page < 1 || page > totalPages) return;
    currentPageHandler(page);
  };
  
  return (
    <div className="PaginationLayer">
      <button
        onClick={() => pageMovementHandler(currentPage - 1)}
        className="leftArrowButton arrowImg"
        disabled={currentPage === 1}
      ></button>
      <div className="BtnLayer">
        {pages.map((item, index) => {
          return (
            <button
              className={`InnerBtn ${
                currentPage === item ? "currentPage" : ""
              }`}
              key={item}
              onClick={() => currentPageHandler(item)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => pageMovementHandler(currentPage + 1)}
        className="rightArrowButton arrowImg"
        disabled={currentPage === totalPages}
      ></button>
    </div>
  );
}

export default Pagination;
