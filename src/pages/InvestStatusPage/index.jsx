import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import InvestStatusDropdown from "./components/Dropdown/index.jsx";
import StartupList from "./components/StartupList/index.jsx";
import PageList from "./components/PageList/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";

function InvestStatus() {
  const ten = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div id="investStatus">
      <div className="investTitle">
        <h2>투자 현황</h2>
        <InvestStatusDropdown />
      </div>
      <div className="scroll-x">
      <StartupList />
      <div className="pageList">
        {ten.map((item, index) => {
          return (
            <Link key={index} to="/Details/2">
              <PageList />
            </Link>
          );
        })}
      </div>
      </div>
      <div className="pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default InvestStatus;
