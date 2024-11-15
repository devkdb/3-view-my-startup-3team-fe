import "./index.css";
import codeItImg from "../../../../assets/images/logo/codeItImg.png";

function PageList() {
  return (
      <div className="pageListItem">
        <div className="pageListItemLank pageListItemPosition basicText">
          1위
        </div>
        <div className="pageListItemName pageListItemPosition">
          <img src={codeItImg} alt="스타트업 이미지" />
          <span>코드잇</span>
        </div>
        <div className="pageListItemDescription pageListItemPosition">
          <span className="basicText">
            코드잇은 '온라인 코딩 교육 서비스'를 운영하는 EdTech 스타트업입니다.
            코딩 교육에 대한 빠른 시작, 쉽고 편리한 지원을 제공하며 실무에서
            개발하는 방법을 학습할 수 있는 플랫폼입니다.
          </span>
        </div>
        <div className="pageListItemCategory pageListItemPosition basicText">
          에듀테크
        </div>
        <div className="investmentAmount pageListItemPosition basicText">
          9,804
        </div>
        <div className="pageListItemRevenueTotal pageListItemPosition basicText">
          7,504
        </div>
      </div>
  );
}

export default PageList;
