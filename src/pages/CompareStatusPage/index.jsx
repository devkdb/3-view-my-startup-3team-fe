import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStartupsList } from "../../api/CompareStatusApi.js";
import "./index.css";
import CompareStatusDropdown from "./components/Dropdown/index.jsx";
import StartupList from "./components/StartupList/index.jsx";
import PageList from "./components/PageList/index.jsx";
import Pagination from "./components/Pagination/index.jsx";

function CompareStatusPage() {
  const [startups, setStartups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [orderBy, setOrderBy] = useState("selectCountDesc");

  const fetchStartups = async (page, order) => {
    const offset = (page - 1) * 10;
    const data = await getStartupsList({
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
        <h2>비교 현황</h2>
        <CompareStatusDropdown onItemClick={handleSortChange} />
      </div>
      <div className="scroll-x">
        <StartupList />
        <div className="pageList">
          {startups.map((startup, index) => (
            <Link key={index} to={`/Details/${startup.id}`}>
              <PageList
                index={(currentPage - 1) * 10 + index + 1}
                startup={startup}
              />
            </Link>
          ))}
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

export default CompareStatusPage;
