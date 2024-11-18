import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SearchComponent from "../../components/Search/index";
import AllStartupDropdown from "./components/Dropdown/index";
import StartupList from "./components/StartupList/index";
import PageList from "./components/PageList/index.jsx";
import Pagination from "../../components/Pagination/index.jsx";

function AllStartupListPage() {
  const ten = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div id="allStartupListPage">
      <div className="title">
        <h1>전체 스타트업 목록</h1>
        <div className="setPos">
          <SearchComponent />
          <AllStartupDropdown />
        </div>
      </div>
      <StartupList />
      <div className="pageList">
        {ten.map((item, index) => {
          return (
            <Link key={index} to="/Details/1">
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

export default AllStartupListPage;
