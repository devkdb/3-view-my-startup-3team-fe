import "./index.css";

function PageList({
  rank,
  name,
  image,
  description,
  category,
  actualInvest,
  revenue,
  employees,
}) {

  const changeActualInvest = Math.floor(actualInvest / 100000000);
  const changeRevenue = Math.floor(revenue / 100000000);

  return (
    <div className="pageListItem">
      <div className="pageListItemLank pageListItemPosition basicText">
        {rank}위
      </div>
      <div className="pageListItemName">
        <img src={image} alt="스타트업 이미지" />
        <span>{name}</span>
      </div>
      <div className="pageListItemDescription pageListItemPosition">
        <span className="basicText">{description}</span>
      </div>
      <div className="pageListItemCategory pageListItemPosition basicText">
        {category}
      </div>
      <div className="pageListItemTotalInvestment pageListItemPosition basicText">
        {changeActualInvest}억원
      </div>
      <div className="AllStartupPageListItemRevenueTotal pageListItemPosition basicText">
        {changeRevenue}억원
      </div>
      <div className="pageListItemStaffTotal pageListItemPosition basicText">
        {employees}명
      </div>
    </div>
  );
}

export default PageList;
