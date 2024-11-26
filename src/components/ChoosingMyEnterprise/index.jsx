import React, { useState, useEffect } from "react";
import { apiRouter } from "../../api/allApiService.js";
import SearchResult from "./SearchResult";
import SearchInput from "../Search/index.jsx";
import Pagination from "./PaginationCorrect/index.jsx";
import "./index.css";

const DEFAULT_IMAGE = "/images/default-company.png";

const ChoosingMyEnterprise = ({ onAddCompany, selectedCompanies = [] }) => {
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색 키워드
  const [searchResults, setSearchResults] = useState([]); // 검색 결과 저장
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const itemsPerPage = 10; // 1페이지당 표시할 기업 수
  const [totalCompanies, setTotalCompanies] = useState(0); // 전체 기업 수
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 오류 메시지

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      const offset = (currentPage - 1) * itemsPerPage;

      try {
        let response;
        if (!searchKeyword.trim()) {
          response = await apiRouter.getAllStartupsList({
            offset,
            limit: itemsPerPage,
          });
        } else {
          response = await apiRouter.getSearchStartupsList({
            searchKeyword,
            offset,
            limit: itemsPerPage,
          });
        }

        const { startups, totalStartups } = response;

        if (!Array.isArray(startups)) {
          throw new Error("API 응답 데이터가 배열이 아닙니다.");
        }

        setSearchResults(startups); // 검색 결과 저장
        setTotalCompanies(totalStartups || startups.length);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        setError("데이터를 불러오는 중 문제가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchKeyword, currentPage, selectedCompanies.length]);

  const totalPages = Math.max(1, Math.ceil(totalCompanies / itemsPerPage));

  return (
    <div className="select-modal">
      <div className="select-modal-all-div">
        <div className="search-h1-input">
          <h1>나의 기업 선택하기</h1>
          <SearchInput
            id="searchKeyword"
            name="searchKeyword"
            onChange={(value) => {
              setSearchKeyword(value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="company-list">
          {isLoading ? (
            <p>로딩 중...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : totalCompanies === 0 ? (
            <p>검색 결과가 없습니다.</p>
          ) : (
            <>
              <p>
                {searchKeyword.trim()
                  ? `검색 결과 (총 ${totalCompanies}개)`
                  : `전체 기업 리스트 (총 ${totalCompanies}개)`}
              </p>
              <SearchResult
                results={searchResults}
                selectedCompanies={selectedCompanies}
                onSelect={(company) => {
                  const companyWithDefaults = {
                    ...company,
                    logo: company.image || DEFAULT_IMAGE, // 기본 로고 설정
                    Category: company.Category || { category: "카테고리 없음" }, // 기본 카테고리 설정
                    name: company.name || "이름 없음", // 기본 이름 설정
                  };
                  onAddCompany(companyWithDefaults); // 부모 컴포넌트로 전달
                }}
              />
            </>
          )}
        </div>

        <div className="pagination-div">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChoosingMyEnterprise;
