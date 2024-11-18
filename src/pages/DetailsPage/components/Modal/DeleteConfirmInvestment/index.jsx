import styles from "./index.module.css";
import X from "../../../../../assets/images/icons/x/ic_x.svg";
import Modal from "../../../../../components/Modal/index";

function DeleteConfirmInvestment({ onDelete, onClose }) {
  return (
    <Modal>
      <div className={styles.content}>
        <img
          src={X}
          onClick={onClose}
          style={{ cursor: "pointer" }}
          alt="close btn"
        />
        <span>해당 정보를 삭제하시겠습니까?</span>
        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={onClose}>
            취소
          </button>
          <button className={styles.confirm} onClick={onDelete}>
            확인
          </button>
        </div>
      </div>
    </Modal>
  );
}
export default DeleteConfirmInvestment;
/*
참고 예제

<App3.js>
import "../styles/App3.css";
import Button from "./Button";
import DeleteConfirmInvestment from "./DeleteConfirmInvestment";


import { useState } from "react";

function App3() {
  const [modalOpen, setModalOpen] = useState(false);

  const confirmDelete = async () => {
    console.log("삭제버튼 누름");
    setModalOpen(false);
  };

  return (
    <>
      <div className={"btn-wrapper"}>
        <Button variant="active" onClick={() => setModalOpen(true)}>
          2버튼모달 열기
        </Button>
      </div>
      <div>
        {modalOpen && (
          <DeleteConfirmInvestment
            onDelete={confirmDelete}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </>
  );
}

export default App3;



<App3.css>.btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}

.modal-open-button,
.modal-close-btn {
  
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
  background-color: var(--white_100);
  width: 250px;
  height: 150px;
  padding: 15px;
}

*/
