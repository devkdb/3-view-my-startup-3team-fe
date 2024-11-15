import classNames from "classnames";
import styles from "./index.module.css";

function Button({ variant, className, as, ...restProps }) {
  if (as === "div") {
    return (
      <div
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

const divTestStyles = {
  container: {
    margin: "80px auto",
  },
  link: {
    margin: "30px auto",
    // text-align: "center"  TODO: 이거 해결할것
  },
};

function App2() {
  return (
    <div className="content">
      // pigma btn_large
      <Button>기업 비교하기</Button>

      //pigma btn_large autline
      <Button variant="autline">기업 비교하기</Button>

      // pigma btn_medium 
      <Button variant="medium">기업 비교하기</Button>

      // pigma btn_outline 
      <Button variant="select">선택하기</Button>
      <Button variant="cancel">선택해제</Button>
      <Button variant="complete">선택완료</Button>

      // <button> -> <div> 로  
      <div className={divTestStyles.link}>
        <Button as="div">홈으로 가기</Button>
      </div>
    </div>
  );
}

export default App2;



.content {
  width: 100%;
  height: 80rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #404040;
}


*/
