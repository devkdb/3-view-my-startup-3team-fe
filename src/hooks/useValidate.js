import { useState } from "react";

export default function useValidate(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const formatAmount = (value) => {
    const numericValue = value.replace(/,/g, ""); // 모든 쉼표 제거
    return !isNaN(numericValue) && numericValue !== "" // 숫자인지 확인
      ? Number(numericValue).toLocaleString() // 숫자를 넘버로 변환한 후 천단위 구분 기호 추가변환
      : value; // 유효한 숫자가 아닐경우 원래의 value 반환
  };

  const validate = () => {
    let isValid = true;
    let newError = {};

    if (!values.name || values.name.length < 1 || values.name.length > 10) {
      isValid = false;
      newError.name = "10자 이내로 입력해주세요.";
    }

    if (!values.comment || values.comment.length < 10) {
      isValid = false;
      newError.comment = "10자 이상 입력해주세요.";
    } else if (!values.comment || values.comment.length > 100) {
      isValid = false;
      newError.comment = "100자 이내로 입력해주세요.";
    }

    const investAmount = values.investAmount.replace(/,/g, "");
    if (!investAmount || isNaN(investAmount)) {
      isValid = false;
      newError.investAmount = "숫자로 입력해주세요.";
    }

    if (!values.password || values.password.length < 6) {
      isValid = false;
      newError.password = "6자 이상 입력해주세요.";
    }

    if (!values.checkPassword || !(values.password === values.checkPassword)) {
      isValid = false;
      newError.checkPassword = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newError);
    return isValid;
  };

  /*
  사용자 입력을 처리하여 상태를 업데이트합니다.
  특정 입력 필드(여기서는 "investAmount")에 대해 포맷된 값을 적용합니다.
  입력 필드에 대한 오류 메시지를 초기화하여 사용자가 새롭게 입력한 값에 대한 유효성을 반영합니다.
  이 함수는 사용자 입력을 처리하기 위해 설계된 이벤트 핸들러. 
  주로 입력 필드의 값이 변경될 때 호출되며, 
  해당 값에 따라 상태를 업데이트하고 오류 메시지를 초기화한다
  */
  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "investAmount") {
      const formattedValue = formatAmount(value);
      setValues({
        ...values,
        [id]: formattedValue,
      });
    } else {
      setValues({
        ...values,
        [id]: value,
      });
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  /*
   사용자가 입력 필드에서 포커스를 잃었을 때 호출. 
   이 함수는 해당 필드가 비어 있는지 확인하고, 
   비어 있다면 필수 입력 항목이라는 오류 메시지를 설정한다.
  */
  const handleBlur = (e) => {
    const { id } = e.target;
    let newError = {};

    if (!values[id] || values[id].trim() === "") {
      newError[id] = "* 필수 입력 항목입니다.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: newError[id] || "",
    }));
  };

  /*
 getRawValues 함수는 현재 상태의 값들을 가져오고, 
 특히 investAmount 필드에서 쉼표를 제거하여 
 원시값(raw value) 형태로 반환하는 함수

  const values = {
  name: "스타트업",
  investAmount: "1,000,000",
  category: "에듀테크"
};
 
예를 들어 위 객체를 아래처럼 바꿔준다.

{
  name: "스타트업",
  investAmount: "1000000", // 쉼표가 제거된 값
  category: "에듀테크"
}
*/
  const getRawValues = () => {
    return {
      ...values,
      investAmount: values.investAmount.replace(/,/g, ""),
    };
  };

  return {
    values,
    errors,
    setValues,
    validate,
    handleChange,
    handleBlur,
    getRawValues,
  };
}
