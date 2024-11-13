import React from "react";
import "./index.css";
import CompareStatusDropdown from "./components/Dropdown/index";
import StartupList from "./components/StartupList/index";

function CompareStatusPage() {
  return (
    <div id="compareStatusPage">
      <div className="compareTitle">
        <h2>비교 현황</h2>
        <CompareStatusDropdown />
      </div>
      <StartupList />
    </div>
  );
}

export default CompareStatusPage;
