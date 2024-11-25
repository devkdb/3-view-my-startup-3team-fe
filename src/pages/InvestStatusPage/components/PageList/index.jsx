import "./index.css";

function PageList({startup, index}) {

  const changeActualInvest = Math.floor(startup.actualInvest / 100000000);
  const changeSimInvest = Math.floor(startup.simInvest / 100000000);

  return (
      <div className="pageListItem">
        <div className="pageListItemLank pageListItemPosition basicText">
          {index}위
        </div>
        <div className="pageListItemName pageListItemPosition">
          <img src={startup.image} alt="스타트업 이미지" />
          <span>{startup.name}</span>
        </div>
        <div className="pageListItemDescription pageListItemPosition">
          <span className="basicText">
           {startup.description}
          </span>
        </div>
        <div className="pageListItemCategory pageListItemPosition basicText">
          {startup.Category.category}
        </div>
        <div className="investmentAmount pageListItemPosition basicText">
          {changeSimInvest}억원
        </div>
        <div className="pageListItemRevenueTotal pageListItemPosition basicText">
          {changeActualInvest}억원
        </div>
      </div>
  );
}

export default PageList;
