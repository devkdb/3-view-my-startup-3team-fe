import "./index.css";

export function CompareStartupPageList({ startup }) {
  const changeActualInvest = Math.floor(startup.actualInvest / 100000000);
  const changeRevenue = Math.floor(startup.revenue / 100000000);
  return (
    <div className="pageListItem">
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
      <div className="pageListItemActualInvest pageListItemPosition basicText">
        {changeActualInvest}억 원
      </div>
      <div className="pageListItemRevenue pageListItemPosition basicText">
        {changeRevenue}억 원
      </div>
      <div className="pageListItemEmployees pageListItemPosition basicText">
        {startup.employees}명
      </div>
    </div>
  );
}

export function CompareStartupRankPageList({ startup }) {
  const changeActualInvest = Math.floor(startup.actualInvest / 100000000);
  const changeRevenue = Math.floor(startup.revenue / 100000000);
  return (
    <div className="rankPageListItem">
      <div className="rankPageListItemLank rankPageListItemPosition rankbasicText">
        {startup.id}위
      </div>
      <div className="rankPageListItemName rankPageListItemPosition">
        <img src={startup.image || "default_image.png"} alt="스타트업 이미지" />
        <span>{startup.name}</span>
      </div>
      <div className="rankPageListItemDescription rankPageListItemPosition">
        <span className="descriptionText">{startup.description}</span>
      </div>
      <div className="rankPageListItemCategory rankPageListItemPosition rankBasicText">
        {startup.Category.category}
      </div>
      <div className="rankPageListItemActualInvest rankPageListItemPosition rankBasicText">
        {changeActualInvest}억 원
      </div>
      <div className="rankPageListItemRevenue rankPageListItemPosition rankBasicText">
        {changeRevenue}억 원
      </div>
      <div className="rankPageListItemEmployees rankPageListItemPosition rankBasicText">
        {startup.employees}명
      </div>
    </div>
  );
}
