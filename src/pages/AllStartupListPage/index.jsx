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
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [orderBy, setOrderBy] = useState("id");

  const loadHandler = async () => {
    try {
      const res = await apiRouter.getAllStartupsList({
        offset: offset,
        limit: limit,
        order: orderBy,
      });
      setStartup(res);
    } catch (error) {
      console.error("Error fetching startups:", error);
    }
  };

  useEffect(() => {
    loadHandler();
  }, [startup]);

  const companies = startup.startups || [];
  const totalPages = startup.totalPages || 0;
  const totalStartups = startup.totalStartups || 0;
  const currentPages = startup.currentPage || 0;
  const hasNextPage = startup.hasNextPage || false;

  const pageHandler = (e) => {
    const page = e.target.innerText;
    setOffset(page * 10);
    setLimit(10);
  };

  return (
    <div id="allStartupListPage">
      <div className="title">
        <h1>전체 스타트업 목록</h1>
        <div className="setPos">
          <SearchComponent />
          <AllStartupDropdown setOrderBy={setOrderBy} />
        </div>
      </div>
      <StartupList />
      <div className="pageList">
        {companies.map((item, index) => {
          return (
            <Link key={index} to={`/details/${item.id}`}>
              <PageList
                rank={(currentPages - 1) * 10 + index + 1}
                name={item.name}
                image={item.image}
                description={item.description}
                category={item.Category.category}
                employees={item.employees}
                actualInvest={item.actualInvest}
                revenue={item.revenue}
              />
            </Link>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          totalPages={totalPages}
          totalStartups={totalStartups}
          currentPage={currentPages}
          hasNextPage={hasNextPage}
          pageHandler={pageHandler}
        />
      </div>
    </div>
  );
}

export default AllStartupListPage;
