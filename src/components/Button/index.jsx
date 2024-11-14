import classNames from "classnames";
import styles from "./index.module.css";
//import ic_check from "../ic_check.svg";

function Button({ variant, className, as, ...restProps }) {
  if (as === "check") {
    return (
      <button
        // {<img
        //   src={ic_check}
        //   alt="checkImg"
        //   className={styles.checkIcon}
        //   />}
        {...restProps}
        className={classNames(
          styles.button,
          variant && styles[variant],
          className
        )}
      />
    );
  }
  return (
    <button
      {...restProps}
      className={classNames(
        styles.button,
        variant && styles[variant],
        className
      )}
    />
  );
}
export default Button;

/*
참고 예제

<App2.js>
//import classNames from "classnames";
//import styles from "../components/Button/index.module.css";
import Button from "../components/Button/index.jsx";
import "../styles/App2.css";

function App2() {
  return (
    <div className="content">
      <Button>기업 비교하기</Button>
      <Button variant="autline">기업 비교하기</Button>
      <Button variant="medium">기업 비교하기</Button>
      <Button variant="select">선택하기</Button>
      <Button variant="cancel">선택해제</Button>
      <Button variant="complete">선택완료</Button>
    </div>
  );
}

export default App2;

<App2.css>
.content {
  width: 40rem;
  height: 80rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

*/
