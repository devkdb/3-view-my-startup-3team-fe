import "./index.css";

export function CompareStartupPageList({ startup }) {
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
        {startup.category}
      </div>
      <div className="pageListItemActualInvest pageListItemPosition basicText">
        {startup.actualInvest}
      </div>
      <div className="pageListItemRevenue pageListItemPosition basicText">
        {startup.revenue}
      </div>
      <div className="pageListItemEmployees pageListItemPosition basicText">
        {startup.employees}
      </div>
    </div>
  );
}

export function CompareStartupRankPageList({ startup }) {
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
        {startup.category}
      </div>
      <div className="rankPageListItemActualInvest rankPageListItemPosition rankBasicText">
        {startup.actualInvest}
      </div>
      <div className="rankPageListItemRevenue rankPageListItemPosition rankBasicText">
        {startup.revenue}
      </div>
      <div className="rankPageListItemEmployees rankPageListItemPosition rankBasicText">
        {startup.employees}
      </div>
    </div>
  );
}
