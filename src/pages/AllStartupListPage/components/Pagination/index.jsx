import "./index.css";

function Pagination() {
  
  return (
    <div className="PaginationLayer">
      <button
        className="leftArrowButton arrowImg"
      >
      </button>
      <div className="BtnLayer">
        <button className="InnerBtn">1</button>
        <button className="InnerBtn">2</button>
        <button className="InnerBtn">3</button>
        <button className="InnerBtn">4</button>
        <button className="InnerBtn">5</button>
      </div>
      <button
        className="rightArrowButton arrowImg"
      >
      </button>
    </div>
  );
}

export default Pagination;
