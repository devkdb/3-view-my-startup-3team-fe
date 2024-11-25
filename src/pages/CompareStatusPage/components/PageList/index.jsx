import "./index.css";

function PageList({ startup, index }) {
  return (
    <div className="pageListItem">
      <div className="pageListItemLank pageListItemPosition basicText">
        {index}위
      </div>
      <div className="pageListItemName pageListItemPosition">
        <img src={startup.image || "default_image.png"} alt="스타트업 이미지" />
        <span>{startup.name}</span>
      </div>
      <div className="pageListItemDescription pageListItemPosition">
        <span className="descriptionText">{startup.description}</span>
      </div>
      <div className="pageListItemCategory pageListItemPosition basicText">
        {startup.Category.category}
      </div>
      <div className="pageListItemSelectCount pageListItemPosition basicText">
        {startup.selectCount}
      </div>
      <div className="pageListItemCompareCount pageListItemPosition basicText">
        {startup.compareCount}
      </div>
    </div>
  );
}

export default PageList;
