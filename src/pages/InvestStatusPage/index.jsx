import React from "react";
import { Link } from "react-router-dom";
import { apiRouter } from "../../api/allApiService.js";
import { useEffect, useState } from "react";
import "./index.css";
import InvestStatusDropdown from "./components/Dropdown/index.jsx";
import StartupList from "./components/StartupList/index.jsx";
import PageList from "./components/PageList/index.jsx";
import Pagination from "./components/PaginationInvestStatus/index.jsx"

function InvestStatusPage() {
  const [startups, setStartups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [orderBy, setOrderBy] = useState("selectCountDesc");

  const fetchStartups = async (page, order) => {
    const offset = (page - 1) * 10;
    const data = await apiRouter.getAllStartupsList({
      limit: 10,
      offset,
      order,
    });
    setStartups(data.startups);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchStartups(currentPage, orderBy);
  }, [currentPage, orderBy]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (sortOrder) => {
    setOrderBy(sortOrder);
  };

  return (
    <div id="compareStatusPage">
      <div className="compareTitle">
        <h2>투자 현황</h2>
        <InvestStatusDropdown onItemClick={handleSortChange} />
      </div>
      <div className="scroll-x">
        <StartupList />
        <div className="pageList">
        {startups.map((startup, index) => {
          return (
            <Link key={index} to={`/Details/${startup.id}`}>
              <PageList index ={(currentPage -1) *10 + index +1} startup={startup}
              />
            </Link>
          );
        })}
        </div>
      </div>
      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default InvestStatusPage;