import styles from "./index.module.css";
import X from "../../../../../assets/images/icons/x/ic_x.svg";
import Modal from "../../../../../components/Modal/index";

export default function UpdateConfirmInvestment({ onUpdate, onClose }) {
  return (
    <Modal>
      <div className={styles.content}>
        <img
          src={X}
          onClick={onClose}
          style={{ cursor: "pointer" }}
          alt='close btn'
        />
        <span>수정하시겠습니까?</span>
        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={onClose}>
            취소
          </button>
          <button className={styles.confirm} onClick={onUpdate}>
            확인
          </button>
        </div>
      </div>
    </Modal>
  );
}
