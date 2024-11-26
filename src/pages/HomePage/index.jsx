import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import homeLogoImage from "../../assets/images/home/MainLogoBig.png";

function HomePage() {
  return (
    <div id="homePage">
      <img className="homeMainLogo" src={homeLogoImage} alt="홈 메인 로고" />
      <div className="mainTextBox">
        <div className="mainText1">스타트업을 검색하고</div>
        <div className="mainText2">모의 투자를 시작하세요!</div>
      </div>
      <div className="mainButtionContainer">
        <Link to="/all-startup-list">
          <button className="mainButtion">투자 시작하기</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
