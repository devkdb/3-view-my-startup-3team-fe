import "./index.css";
import { useState } from "react";
import Oneye from "../../assets/images/icons/visibility/btn_visibility_on.png";
import Offeye from "../../assets/images/icons/visibility/btn_visibility_off.png";

function PasswordInput() {
  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });
  const [isPwVisible, setIsPwVisible] = useState(false);

  const togglePwVisibility = () => {
    setIsPwVisible(!isPwVisible);
  };

  const handlePasswordType = (e) => {
    setPwType(() => {
      if (!pwType.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  return (
    <div>
      <input
        placeholder="패스워드를 입력해주세요"
        type={isPwVisible ? "text" : "password"}
      />
      <button className="toggleBtn" onChange={handlePasswordType}>
        <img
          src={isPwVisible ? Offeye : Oneye}
          alt={isPwVisible ? "비밀번호 보임" : "비밀번호 안보임"}
          onClick={togglePwVisibility}
        />
      </button>
    </div>
  );
}

export default PasswordInput;
