import "./index.css";

function Pagination({ totalPages, totalStartups, currentPage, hasNextPage, pageHandler }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <div className="PaginationLayer">
      <button className="leftArrowButton arrowImg"></button>
      <div className="BtnLayer">
        {pages.map((item, index) => {
          return (
            <button
              className="InnerBtn"
              key={item}
              onClick={pageHandler}
            >
              {index + 1}
            </button>
          )
        })}
      </div>
      <button className="rightArrowButton arrowImg"></button>
    </div>
  );
}

export default Pagination;
