import { NavLink, Link } from "react-router-dom";
import "./index.css";
import mainLogo from "../../assets/images/logo/MainLogoMiddle.png";

const getLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? "##FFFFFF" : undefined,
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
          <NavLink to="/all-startup-list" style={getLinkStyle}>
            전체 기업
          </NavLink>
          <NavLink to="/compare" style={getLinkStyle}>
            나의 기업 비교
          </NavLink>
          <NavLink to="/compare-status" style={getLinkStyle}>
            비교 현황
          </NavLink>
          <NavLink to="/invest-status" style={getLinkStyle}>
            투자 현황
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
