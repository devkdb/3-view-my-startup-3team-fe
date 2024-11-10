import { NavLink, Link } from "react-router-dom";
import "./index.css";
import mainLogo from "../../assets/images/logo/MainLogoMiddle.png";

const getLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? "##FFFFFF" : "#747474",
    
  };
};

function Nav() {
  return (
    <div className="nav">
      <div className="navContent">
        <div className="navLogo">
          <Link to="/">
            <img src={mainLogo} alt="Mainlogo" />
          </Link>
        </div>
        <div className="navMenu">
          <div className="navMenuItem">
            <NavLink to="/all-startup-list" style={getLinkStyle}>
              전체 기업
            </NavLink>
          </div>
          <div className="navMenuItem">
            <NavLink to="/compare" style={getLinkStyle}>
              나의 기업 비교
            </NavLink>
          </div>
          <div className="navMenuItem">
            <NavLink to="/compare-status" style={getLinkStyle}>
              비교 현황
            </NavLink>
          </div>
          <div className="navMenuItem">
            <NavLink to="/invest-status" style={getLinkStyle}>
              투자 현황
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
