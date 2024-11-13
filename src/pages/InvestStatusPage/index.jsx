import React from "react";
import "./index.css";
import InvestStatusDropdown from "./components/Dropdown/index";
import StartupList from "./components/StartupList/index";

function InvestStatus() {
  return (
    <div id="investStatus">
      <div className="investTitle">
        <h2>투자 현황</h2>
        <InvestStatusDropdown />
      </div>
      <StartupList />
    </div>
  );
}

export default InvestStatus;
