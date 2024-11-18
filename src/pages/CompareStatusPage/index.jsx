import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import CompareStatusDropdown from "./components/Dropdown/index.jsx";
import StartupList from "./components/StartupList/index.jsx";
import PageList from "./components/PageList/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";

function CompareStatusPage() {
  const ten = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div id="compareStatusPage">
      <div className="compareTitle">
        <h2>비교 현황</h2>
        <CompareStatusDropdown />
      </div>
      <StartupList />
      <div className="pageList">
        {ten.map((item, index) => {
          return (
            <Link key={index} to="/Details/3">
              <PageList />
            </Link>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default CompareStatusPage;
