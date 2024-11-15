import styles from "./index.module.css";
import X from "../../../assets/images/icons/svg/ic_x.svg";
import Modal from "../../../../../components/Modal/index";

function CompleteInvestment({ onClose }) {
  return (
    <Modal>
      <div className={styles.content}>
        <img
          src={X}
          onClick={onClose}
          style={{ cursor: "pointer" }}
          alt="close btn"
        />
        <span>투자가 완료되었어요!</span>
        <button className={styles.complete} onClick={onClose}>
          확인
        </button>
      </div>
    </Modal>
  );
}
export default CompleteInvestment;
/*
참고 예제

<App4.js>
import "../styles/App4.css";
import Button from "./Button";
import PopupOneButton from "./PopupOneButton";

import { useState } from "react";

function App4() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={"btn-wrapper"}>
        <Button variant="active" onClick={() => setModalOpen(true)}>
          확인 모달 열기
        </Button>
      </div>
      <div>
        {modalOpen && <PopupOneButton onClose={() => setModalOpen(false)} />}
      </div>
    </>
  );
}

export default App4;


<App4.css>
.btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}

.modal-open-button,
.modal-close-btn {
  cursor: pointer;
  margin-left: auto;
}

.modal-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #ffffff;
  width: 250px;
  height: 150px;
  padding: 15px;
}
*/
