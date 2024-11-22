import "./index.css";
import { useState } from "react";
import DeleteIcon from "../../assets/images/icons/ic_delete.png";
import Oneye from "../../assets/images/icons/visibility/btn_visibility_on.png";
import Offeye from "../../assets/images/icons/visibility/btn_visibility_off.png";
import { apiRouter } from "../../api/allApiService";

function InvestmentInput() {
  const [startupId, setStartupId] =useState("");
  const [name, setName] = useState("");
  const [investAmount, setInvestAmount] = useState("");
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errors, setErrors] = useState([]);

  const validateRePw = () => {
      if(rePassword !== password){
          setErrors((prev) => ({
              ...prev,
              rePassword: "비밀번호가 일치하지 않습니다.",
          }));
      }else {
          setErrors((prev) => ({...prev, name: undefined}));
      }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const investData = {
      startupId: Number(startupId),
      name:name,
      investAmount: Number(investAmount),
      comment: comment,
      password,
    };
    try{
      const result = await apiRouter.createInvestment(investData);
      console.log("투자 성공:", result);
    }catch(error){
      console.log("투자 실패:", error)
    }
  };

const [pwType, setPwType] = useState({
  type: "password",
  visible: false,
});

const [checkPw, setCheckPw] = useState({
  type: "password",
  visible: false,
});

const [isPwVisible, setIsPwVisible] = useState(false);
const [checkPwVisible, setCheckPwVisible] = useState(false);

const togglePwVisibility = () => {
  setIsPwVisible(!isPwVisible);
};

const toggleCheckPwVisibility = () => {
  setCheckPwVisible(!checkPwVisible);
};

const handleCheckPassword = (e) => {
  setCheckPw(() => {
    if (!checkPw.visible) {
      return { type: "text", visible: true };
    } else {
      return { type: "password", visible: false };
    }
  });
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
  <div className="inputBackground">
    <div className="upper">
      <span className="ment">기업에 투자하기</span>
      <img src={DeleteIcon} alt="삭제" />
    </div>
    <form onSubmit={handleSubmit}>
      <label>
    <p>투자 기업 정보</p>
    <input id="startupId"
    value={startupId}
    onChange={(e) => {
      setStartupId(e.target.value);
    }}
    />
    </label>
    <label>
      <p>투자자 이름</p>
      <input placeholder="투자자 이름을 입력해 주세요"
      id="name"
      value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}/>
      </label>
      <label>
      <p>투자 금액</p>
      <input placeholder="투자 금액을 입력해 주세요"
      id="investAmount"
      value={investAmount}
        onChange={(e) => {
          setInvestAmount(e.target.value);
        }}
      />
      </label>
      <label>
      <p>투자 코멘트</p>
      <textarea
        placeholder="투자에 대한 코멘트를 입력해 주세요"
        className="CommentInput"
        id="comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      </label>
      <label>
      <p>비밀번호</p>
      <input
        placeholder="비밀번호를 입력해주세요"
        type={isPwVisible ? "text" : "password"}
        id="password"
        value={password}
        onChange={ (e) => {
          setPassword(e.target.value);
        }}
      />
      
      <button className="toggle" type="button" onChange={handlePasswordType}>
        <img
          src={isPwVisible ? Offeye : Oneye}
          alt="비밀번호 보임"
          onClick={togglePwVisibility}
        />
      </button>
      </label>
      <label>
      <p>비밀번호 확인</p>
      <input
        placeholder="비밀번호를 다시 한 번 입력해주세요"
        type={checkPwVisible ? "text" : "password"}
        id="rePassword"
        value={rePassword}
        onChange={(e) => {
          setRePassword(e.target.value);
          validateRePw(e.target.value);
        }}
        error = {errors.rePassword}
      />
      <button className="toggleBtn" type="button" onChange={handleCheckPassword}>
        <img
          src={checkPwVisible ? Offeye : Oneye}
          alt="비밀번호 보임"
          onClick={toggleCheckPwVisibility}
        />
      </button>
      </label>
      <div className="btnPos">
        <button className="cancelBtn" type="button">취소</button>
        <button className="investBtn"
        type="submit"
        disabled={!name || !investAmount || !comment || !password}
        >투자하기</button>
      </div>
    </form>
  </div>
);
}

export default InvestmentInput;
