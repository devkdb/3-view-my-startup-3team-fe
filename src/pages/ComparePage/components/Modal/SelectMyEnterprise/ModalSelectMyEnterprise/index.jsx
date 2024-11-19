import "./index.css";
import SearchComponent from "../ModalSearch/index";
import codeit from "../../../../../../assets/images/logo/codeit.png";
import sparta from "../../../../../../assets/images/logo/SPARTA.png";
import BtnOutLine from "../ButtonOutLine/index";

function ModalSelect({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <p>나의 기업 선택하기</p>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <SearchComponent />
        <div className="recent-companies">
          <p>최근 선택된 기업 (2)</p>
          {/* 나중에 뽑는 내용에 따라 변경 ex) (startuplength) */}
          <div className="company-list">
            <div className="company-item">
              <img src={codeit} alt="코드잇 로고" />
              <div className="company-font">
                코드잇 <span>에듀테크</span>
              </div>
              <BtnOutLine />
            </div>
            <div className="company-item">
              <img src={sparta} alt="팀스쿨타 로고" />
              <div className="company-font">
                팀스파르타 <span>에듀테크</span>
              </div>
              <BtnOutLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSelect;
