import React from 'react';
import "./index.css";
import SearchComponent from "../../components/Search/index";
import AllStartupDropdown from './components/Dropdown/index';
import StartupList from './components/StartupList/index';

function AllStartupListPage(){
  return (
    <div id="allStartupListPage">
        <div className="title"> 
          <h2>전체 스타트업 목록</h2>
          <div className="setPos">
            <SearchComponent/>
            <AllStartupDropdown/>
          </div>
        </div>
        <StartupList/>
     </div>
  )
}

export default AllStartupListPage;
