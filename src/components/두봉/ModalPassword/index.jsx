import styles from "./ModalPassword.module.css";
import X from "../../../assets/images/icons/svg/ic_x.svg";
import visibilityOff from "../../assets/images/icons/visibility/btn_visibility_off.svg";
import visibilityOn from "../../assets/images/icons/visibility/btn_visibility_on.svg";
import Modal from "./Modal";
import { useState, useRef, useEffect } from "react";
import PopupTwoButton from "../components/PopupTwoButton";
import PasswordFail from "../PasswordFail/index";

import PasswordInput from "../../PasswordInput/index";

// MockInvestor 테이블의 id, password를 가져와서 input에 입력한 password와 비교한다.
export default function ModalPassword({ onClose, mockInvestor }) {
  const { id, password: storedPassword } = mockInvestor || {
    id: 1,
    password: "1111",
  };

  const [password, setPassword] = useState(""); // input에 입력한 패스워드 값
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // 눈알 토클 처리
  const [fail, setFail] = useState(false); // 잘못된 비밀번호 입력했을때
  const [confirm, setConfirm] = useState(false);
  const passwordInputRef = useRef(null); // input 엘리먼트에 focus 여부

  const [isPasswordDisable, setPasswordDisable] = useState(false); // 패스워드 글자 입력시 버튼 활성화 여부
  // const handleKeyUp = (e) => {
  //   const inputPassword = e.target.value;

  //   // 5글자 이상이면 버튼 활성화
  //   if (inputPassword.length > 5) setPasswordDisable(true);
  //   else setPasswordDisable(false);
  // };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // 이 핸들러는 input의 value가 변경될때마다 그 값을 state에 반영
  const handleChange = (e) => {
    setPassword(e.target.value);

    // 한글자라도 입력하면 버튼 활성화
    if (e.target.value.length > 0) setPasswordDisable(true);
    else setPasswordDisable(false);
  };

  // 유저가 input에 입력한 password와 디비에 저장된 값을 비교한다.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 동등 연산자(==)는 두 피연산자의 값이 동일한 경우 true를 반환하며,
    // 동치 연산자(===)는 두 피연산자의 값과 타입이 동일한 경우 true를 반환한다.
    if (password !== storedPassword) {
      setFail(true);
      return;
    }

    setConfirm(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }, []);

  const confirmDelete = async () => {
    console.log("삭제하기 누름");
    // TODO: FE-REQUEST-DELETE (서버에 삭제 요청)
    onClose();
    window.location.reload(); // TODO:이거 말고 UseEffect() 사용해서 해볼것
  };

  return (
    <Modal>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>삭제 권한 인증</h1>
          <img
            src={X}
            onClick={onClose}
            style={{ cursor: "pointer" }}
            alt="close button"
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className={styles.group}>
          <h1>비밀번호</h1>
          <div className={styles.password}>
            <input
              ref={passwordInputRef}
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              placeholder="패스워드를 입력해 주세요"
              value={password}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              // onKeyUp={handleKeyUp}
            />
            <img
              src={isPasswordVisible ? visibilityOff : visibilityOn}
              alt={isPasswordVisible ? "비밀번호 표시" : "비밀번호 숨기기"}
              onClick={togglePasswordVisibility}
            />

            {/* <PasswordInput /> */}
          </div>
        </div>
        <button
          className={styles.delete}
          disabled={!isPasswordDisable}
          onClick={handleSubmit}
        >
          삭제하기
        </button>
      </div>
      {fail && <PasswordFail setFail={setFail} />}
      {confirm && (
        <PopupTwoButton
          onDelete={confirmDelete}
          onClose={() => setConfirm(false)}
        />
      )}
    </Modal>
  );
}

/*
참고 예제
import "../styles/App3.css";
import Button from "./Button";
import AuthenticateDeletPermission from "./AuthenticateDeletPermission";

import { useState } from "react";

function App5() {
  const [modalOpen, setModalOpen] = useState(false);

  // Modal to Authenticate permission to delete

  return (
    <>
      <div className={"btn-wrapper"}>
        <Button variant="active" onClick={() => setModalOpen(true)}>
          삭제권한인증 모달
        </Button>
      </div>
      <div>
        {modalOpen && (
          <AuthenticateDeletPermission onClose={() => setModalOpen(false)} />
        )}
      </div>
    </>
  );
}

export default App5;
.btn-wrapper {
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
