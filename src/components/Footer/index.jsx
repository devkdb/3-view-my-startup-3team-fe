import "./index.css";
import { Link } from "react-router-dom";
import MainLogoMiddle from "../../assets/images/logo/MainLogoMiddle.png";
import gitHubIcon from "../../assets/images/logo/gitHub.logo.png";

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
        <div className="footerCopyrightContainer">
          <span className="footerCopyright">
            © 2024 View My Startup. All rights reserved.
          </span>
          <a
            href="https://github.com/devkdb/3-view-my-startup-3team-fe"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHubIcon} alt="github" className="footerGitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
