import MainLogoMiddle from "../../assets/images/logo/MainLogoMiddle.png";
import "./index.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <img src={MainLogoMiddle} alt="MainlogoM" className="footerMainLogo" />
        <div className="footerMenu">
          <Link className="footerLink" to="/about">
            <span className="footerText">프로젝트 소개</span>
          </Link>
          <Link className="footerLink" to="/terms">
            <span className="footerText">이용 약관</span>
          </Link>
          <Link className="footerLink" to="/privacy">
            <span className="footerText" id="footerTextRight">
              개인정보 처리방침
            </span>
          </Link>
        </div>
        <span className="footerCopyright">
          © 2024 View My Startup. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
