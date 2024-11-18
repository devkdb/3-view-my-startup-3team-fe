import styles from "./index.module.css";

export default function Modal({ children }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

/*
CompleteInvestment(팝업 1버튼), DeleteConfirmInvestment(팝업 2버튼) 예제 참고
*/
