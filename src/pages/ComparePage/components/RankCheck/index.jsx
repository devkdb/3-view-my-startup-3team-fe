import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CompareDropdown from "../Dropdown";
import { CompareStartupRankPageList } from "../PageList";
import { apiRouter } from "../../../../api/allApiService";
import { CompareStartupRankCheck } from "../StartupList";
import "./index.css";

function RankCheck({ selectedCompanies, selectedBaseCompany }) {
  const [startups, setStartups] = useState([]);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [orderBy, setOrderBy] = useState("actualInvestDesc");

  const fetchStartups = async (order) => {
    try {
      const data = await apiRouter.patchSelections({
        surveyData: { order },
        id: selectedCompanies.map((company) => company.id),
      });
      if (data && Array.isArray(data.compareStartups)) {
        let validStartups = data.compareStartups.filter(
          (startup) =>
            startup.hasOwnProperty("id") &&
            startup.hasOwnProperty("compareCount")
        );
        if (validStartups.length > 0) {
          switch (order) {
            case "actualInvestDesc":
              validStartups.sort((a, b) => b.actualInvest - a.actualInvest);
              break;
            case "actualInvestAsc":
              validStartups.sort((a, b) => a.actualInvest - b.actualInvest);
              break;
            case "revenueDesc":
              validStartups.sort((a, b) => b.revenue - a.revenue);
              break;
            case "revenueAsc":
              validStartups.sort((a, b) => a.revenue - b.revenue);
              break;
            case "employeesDesc":
              validStartups.sort((a, b) => b.employees - a.employees);
              break;
            case "employeesAsc":
              validStartups.sort((a, b) => a.employees - b.employees);
              break;
            default:
              break;
          }
          setStartups(validStartups);
        } else {
          console.error("비교할 스타트업 데이터가 없습니다.");
          setStartups([]);
        }
      } else {
        console.error("서버 응답 형식이 잘못되었습니다:", data);
        setStartups([]);
      }
      if (data && data.selectedStartup) {
        setSelectedStartup(data.selectedStartup);
      }
    } catch (error) {
      console.error("스타트업 데이터를 가져오는 중 오류 발생:", error);
      setStartups([]);
    }
  };

  useEffect(() => {
    if (selectedCompanies.length > 0) {
      fetchStartups(orderBy);
    }
  }, [selectedCompanies, selectedBaseCompany, orderBy]);

  const handleSortChange = (sortOrder) => {
    setOrderBy(sortOrder);
  };

  return (
    <>
      <div className="rank-check">
        <h1>기업 순위 확인하기</h1>
        <CompareDropdown onItemClick={handleSortChange} />
      </div>
      <CompareStartupRankCheck />
      <div className="scroll-x">
        {startups && startups.length > 0 ? (
          startups.map((startup, index) => (
            <Link key={index} to={`/Details/${startup.id}`}>
              <CompareStartupRankPageList key={startup.id} startup={startup} />
            </Link>
          ))
        ) : (
          <p>표시할 스타트업이 없습니다.</p>
        )}
      </div>
    </>
  );
}

export default RankCheck;
