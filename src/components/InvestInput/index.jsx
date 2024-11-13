import "./App.css";
import { useState } from "react";
import DeleteIcon from "./image/ic_delete.png";
import Oneye from "../../assets/images/icons/visibility/btn_visibility_on.png"
import Offeye from "../../assets/images/icons/visibility/btn_visibility_off.png"

function InvestmentInput() {

  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });

  const [checkPw, setCheckPw] =useState({
    type: "password",
    visible:false,
  });

  const [isPwVisible, setIsPwVisible] = useState(false);
  const [checkPwVisible, setCheckPwVisible] = useState(false);

  const togglePwVisibility = () => {
    setIsPwVisible(!isPwVisible);
  };

  const toggleCheckPwVisibility = () => {
    setCheckPwVisible(!checkPwVisible);
  }

  const handleCheckPassword = (e) => {
    setCheckPw(() => {
      if(!checkPw.visible){
        return {type:"text", visible:true}
      }else {
        return {type: "password", visible: false};
      }
    });
  };
 
  const handlePasswordType = (e) => {
    setPwType(() => {
      if(!pwType.visible) {
        return {type:"text", visible:true}
      }else {
        return {type: "password", visible: false};
      }
    });
  };
  
  
  return (
    <div className="inputBackground">
      <div className="upper">
        <span className="ment">기업에 투자하기</span>
        <img src={DeleteIcon} alt="삭제"/>
      </div>
      <p>투자 기업 정보</p>
      <p>투자자 이름</p>
      <input placeholder="투자자 이름을 입력해 주세요"/>
      <p>투자 금액</p>
      <input placeholder="투자 금액을 입력해 주세요"/>
      <p>투자 코멘트</p>
      <textarea placeholder="투자에 대한 코멘트를 입력해 주세요" className="CommentInput"/>
      <p>비밀번호</p>
      <input placeholder="비밀번호를 입력해주세요" 
      type={isPwVisible ? 'text' : 'password'}/>
      <button className="toggle" onChange={handlePasswordType}>
        <img src= {isPwVisible ? Offeye : Oneye} 
        alt="비밀번호 보임" onClick={togglePwVisibility}/>
      </button>
      <p>비밀번호 확인</p>
      <input placeholder="비밀번호를 다시 한 번 입력해주세요" 
      type={checkPwVisible ? 'text' : 'password'} />
      <button className="toggleBtn" onChange={handleCheckPassword}>
      <img src= {checkPwVisible ? Offeye : Oneye} 
      alt="비밀번호 보임" onClick={toggleCheckPwVisibility}/>
      </button>
      <div className="btnPos">
        <button className="cancelBtn">취소</button>
        <button className="investBtn">투자하기</button>
      </div>
    </div>
  );
}

export default InvestmentInput;