import InputInactive from "../../components/InputFieldInactive";
import "../ComparePage/index.css";
import btnPlusIcon from "../../assets/images/icons/btn_plus.png";
import { useState } from "react";
import Button from "../../components/Button";

function ComparePage() {
  const [showModal, setShowModal] = useState(false); //모달 false(숨김)상태

  //플러스 버튼 클릭 했을때 모달 표시 및 숨기기
  const toggleModal = () => {
    console.log("toggleModal");
    // togglemodal 함수 실행 시 showmodal 상태 변경 !가 추가 되어있으므로 ture(보임)상태가 됨
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="compare-page">
        <div className="choose-My-Enterprise">
          <h1>나의 기업을 선택해주세요!</h1>
        </div>
        <InputInactive onClick={setShowModal}>
          <div className="btn-plus-container">
            <img
              src={btnPlusIcon}
              alt="기업 추가 버튼"
              className="btn-plus-icon"
              onClick={openModal}
            />
            <p>기업 추가</p>
          </div>
        </InputInactive>
        <Button variant="default">기업 비교하기</Button>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <p>모달 자리</p>
        </div>
      )}
    </>
  );
}

export default ComparePage;
