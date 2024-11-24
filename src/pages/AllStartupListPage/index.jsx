import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { apiRouter } from "../../api/allApiService.js";
import { useEffect, useState } from "react";
// jsx
import SearchComponent from "../../components/Search/index.jsx";
import AllStartupDropdown from "./components/Dropdown/index.jsx";
import StartupList from "./components/StartupList/index";
import PageList from "./components/PageList/index.jsx";
import Pagination from "./components/Pagination/index.jsx";

function AllStartupListPage() {
  const [startup, setStartup] = useState([]);

  const loadHandler = async () => {
    try {
      const res = await apiRouter.getAllStartupsList();
      setStartup(res);
    } catch (error) {
      console.error("Error fetching startups:", error);
    }
  };

  useEffect(() => {
    loadHandler();
  }, []);
  console.log("startup", startup);

  const company = startup.startups || [];
  const currentPages = startup.currentPage || 0;

  return (
    <div id="allStartupListPage">
      <div className="title">
        <h1>전체 스타트업 목록</h1>
        <div className="setPos">
          <SearchComponent />
          <AllStartupDropdown />
        </div>
      </div>
      <div className="scroll-x">
      <StartupList />
      <div className="pageList">
        {company.map((item, index) => {
          return (
            <Link key={index} to={`/Details/${item.id}`}>
              <PageList
                rank={(currentPages - 1) * 10 + index + 1}
                name={item.name}
                image={item.image}
                description={item.description}
                category={item.category}
                employees={item.employees}
                actualInvest={item.actualInvest}
                revenue={item.revenue}
              />
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

export default AllStartupListPage;
