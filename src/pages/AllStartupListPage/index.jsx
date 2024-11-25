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
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("id");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const loadHandler = async () => {
      try {
        if (searchKeyword !== "") {
          const res = await apiRouter.getSearchStartupsList({
            offset: offset,
            limit: 10,
            order: orderBy,
            searchKeyword,
          });
          setStartup(res);
          return;
        } else if (searchKeyword === "") {
          const res = await apiRouter.getAllStartupsList({
            offset: offset,
            limit: 10,
            order: orderBy,
          });
          setStartup(res);
        }
      } catch (error) {
        console.error("Error fetching startups:", error);
      }
    };

    loadHandler();
  }, [offset, searchKeyword, orderBy]);

  const companies = startup.startups || [];
  const totalPages = startup.totalPages || 0;
  const currentPages = startup.currentPage || 1;
  const hasNextPage = startup.hasNextPage || false;

  const currentPageHandler = (page) => {
    setCurrentPage(page);
    setOffset((page - 1) * 10);
  };

  const onChange = (value) => {
    setSearchKeyword(value);
  };

  return (
    <div id="allStartupListPage">
      <div className="title">
        <h1>전체 스타트업 목록</h1>
        <div className="setPos">
          <SearchComponent onChange={onChange} />
          <AllStartupDropdown setOrderBy={setOrderBy} />
        </div>
      </div>
      <div className="scroll-x">
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
      </div>
      <div className="pagination">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPages}
          hasNextPage={hasNextPage}
          currentPageHandler={currentPageHandler}
        />
      </div>
    </div>
  );
}

export default AllStartupListPage;
