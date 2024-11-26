import styles from "./index.module.css";
import X from "../../../../../assets/images/icons/x/ic_x.svg";

import Modal from "../../../../../components/Modal/index";

function CompleteInvestment({ onClose }) {
  return (
    <Modal>
      <div className={styles.content}>
        <img
          src={X}
          onClick={onClose}
          style={{ cursor: "pointer" }}
          alt='close btn'
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
