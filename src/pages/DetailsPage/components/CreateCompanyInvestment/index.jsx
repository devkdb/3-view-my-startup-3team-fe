import React from "react";
import styles from "./index.module.css";
import X from "../../../../assets/images/icons/x/ic_x.svg";
import visibilityOff from "../../../../assets/images/icons/visibility/btn_visibility_off.svg";
import visibilityOn from "../../../../assets/images/icons/visibility/btn_visibility_on.svg";
import Modal from "../../../../components/Modal/index";
import { useState } from "react";
import useValidate from "../../../../hooks/useValidate.js";

import { apiRouter } from "../../../../api/allApiService.js";
import CompleteInvestment from "../Modal/CompleteInvestment/index.jsx";

function CreateCompanyInvestment({ onClose, startup }) {
  const { id: startupId, image, name, categoryName } = startup || {};

  //  useValidate 훅 사용. 사용자가 입력할 때마다 유효성검사 수행.
  const {
    values,
    setValues,
    errors,
    handleChange,
    validate,
    handleBlur,
    getRawValues,
  } = useValidate({
    name: "",
    investAmount: "",
    comment: "",
    password: "",
    checkPassword: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [checkPasswordVisible, setCheckPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleCheckPasswordVisibility = () => {
    setCheckPasswordVisible(!checkPasswordVisible);
  };

  // 폼 제출 또는 유효성 검사를 수행하기 전에 모든 필드가 입력되었는지 확인
  // 모든 필드가 비어 있지 않다면, 이 함수는 true 반환.
  // 하나 이상의 필드가 비어 있을 경우 false 반환.
  const isInputEmpty = () => {
    return (
      values.name.trim() !== "" &&
      values.investAmount.trim() !== "" &&
      values.comment.trim() !== "" &&
      values.password.trim() !== "" &&
      values.checkPassword.trim() !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate() || !isInputEmpty()) {
      return; // 유효성 검사 통과 여부 확인
    }

    const rawValues = getRawValues();
    const investAmount = parseFloat(rawValues.investAmount);

    try {
      const investment = { ...rawValues, investAmount, startupId };
      delete investment.checkPassword; // 서버로 전송할 필요가 없는 비밀번호 확인 필드(checkPassword)를 제거

      const res = await apiRouter.createInvestment(investment);

      if (!res) {
        setError("투자 생성 요청이 실패했습니다.");
        return;
      } else if (!res.id) {
        setError("투자 ID를 얻는 데 실패하였습니다.");
        return;
      } else {
        resetForm(); // 상태 초기화 (폼 비우기)
        setIsComplete(true);
        onClose(res); // 새로운 투자 정보를 전달
      }
    } catch (error) {
      setError("투자에 실패하였습니다.");
    }
  };

  const resetForm = () => {
    setValues({
      name: "",
      investAmount: "",
      comment: "",
      password: "",
      checkPassword: "",
    });
  };

  const handleCloseCompleteModal = () => {
    setIsComplete(false);
    onClose();
    // window.location.reload(); 이거 대신에 setValues() 사용.
  };

  return (
    <>
      <Modal>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <h1>기업에 투자하기</h1>
            <img
              src={X}
              onClick={onClose}
              style={{ cursor: "pointer" }}
              alt='close btn'
            />
          </div>
          <div>
            <h1>투자 기업 정보</h1>
            <div className={styles.startup}>
              <img src={image} alt={name} />
              <h1>{name}</h1>
              <p>{categoryName}</p>
            </div>
          </div>

          {/* 투자자 이름 */}
          <div className={styles.group}>
            <label htmlFor='name'>투자자 이름</label>
            <input
              type='text'
              id='name'
              placeholder='투자자 이름을 입력해 주세요'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                border: errors.name
                  ? "0.1rem solid var(--error-color)"
                  : "0.1rem solid var(--gray_200)",
              }}
            />
            {errors.name && <div className={styles.error}>{errors.name}</div>}
          </div>

          {/* 투자 금액 */}
          <div className={styles.group}>
            <label htmlFor='investAmount'>투자 금액</label>
            <input
              type='text'
              id='investAmount'
              placeholder='투자 금액을 입력해 주세요'
              value={values.investAmount}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                border: errors.investAmount
                  ? "0.1rem solid var(--error-color)"
                  : "0.1rem solid var(--gray_200)",
              }}
            />
            {errors.investAmount && (
              <div className={styles.error}>{errors.investAmount}</div>
            )}
          </div>

          {/* 투자 코멘트 */}
          <div className={styles.group}>
            <label htmlFor='comment'>투자 코멘트</label>
            <textarea
              type='text'
              id='comment'
              placeholder='투자에 대한 코멘트를 입력해 주세요'
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                border: errors.comment
                  ? "0.1rem solid var(--error-color)"
                  : "0.1rem solid var(--gray_200)",
              }}
            />
            {errors.comment && (
              <div className={styles.error}>{errors.comment}</div>
            )}
          </div>

          {/* 비밀번호 */}
          <div className={styles.group}>
            <label htmlFor='password'>비밀번호</label>
            <div className={styles.password}>
              <input
                type={isPasswordVisible ? "text" : "password"}
                id='password'
                placeholder='비밀번호를 입력해 주세요'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  border: errors.password
                    ? "0.1rem solid var(--error-color)"
                    : "0.1rem solid var(--gray_200)",
                }}
              />
              <img
                src={isPasswordVisible ? visibilityOff : visibilityOn}
                alt={isPasswordVisible ? "비밀번호 표시" : "비밀번호 숨기기"}
                onClick={togglePasswordVisibility}
              />
            </div>
            {errors.password && (
              <div className={styles.error}>{errors.password}</div>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div className={styles.group}>
            <label htmlFor='checkPassword'>비밀번호 확인</label>
            <div className={styles.password}>
              <input
                type={checkPasswordVisible ? "text" : "password"}
                id='checkPassword'
                placeholder='비밀번호를 다시 한 번 입력해 주세요'
                value={values.checkPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  border: errors.checkPassword
                    ? "0.1rem solid var(--error-color)"
                    : "0.1rem solid var(--gray_200)",
                }}
              />
              <img
                src={checkPasswordVisible ? visibilityOff : visibilityOn}
                alt={checkPasswordVisible ? "비밀번호 표시" : "비밀번호 숨기기"}
                onClick={toggleCheckPasswordVisibility}
              />
            </div>
            {errors.checkPassword && (
              <div className={styles.error}>{errors.checkPassword}</div>
            )}
          </div>
          <div className={styles.buttons}>
            <button className={styles.cancel} onClick={onClose}>
              취소
            </button>
            <button
              className={styles.submit}
              type='submit'
              disabled={!isInputEmpty()}
            >
              투자하기
            </button>
          </div>
          {error && <div className={styles.error}>{error}</div>}
        </form>
      </Modal>
      {isComplete && <CompleteInvestment onClose={handleCloseCompleteModal} />}
    </>
  );
}
export default CreateCompanyInvestment;
