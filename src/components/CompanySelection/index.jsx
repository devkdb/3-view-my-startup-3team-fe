import React, { useState, useEffect } from "react";
import { apiRouter } from "../../api/allApiService.js";
import SearchResultList from "./SearchResultList/index.jsx";
import SelectedList from "./SelectedList/index.jsx";
import SearchInput from "../Search/index.jsx";
import Pagination from "./PaginationCorrection/index.jsx";
import "./index.css";

const CompanySelection = ({
  selectedCompanies,
  onAddCompanies,
  onRemoveCompany,
}) => {
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태
  const [searchResults, setSearchResults] = useState([]); // 검색결과 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 10; // 페이지당 항목 개수
  const [totalCompanies, setTotalCompanies] = useState(0); // 전체 기업 수
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 오류 상태

  useEffect(() => {
    // 페이지네이션 및 검색 데이터 로딩
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      const offset = (currentPage - 1) * itemsPerPage;

      try {
        let response;
        if (!searchKeyword.trim()) {
          // 검색어가 없을 때 전체 기업 리스트 요청
          response = await apiRouter.getAllStartupsList({
            offset,
            limit: itemsPerPage,
          });
        } else {
          // 검색어가 있을 때 검색 결과 요청
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

        setSearchResults(startups);
        setTotalCompanies(totalStartups || startups.length); // 전체 기업 수 업데이트
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        setError("데이터를 불러오는 중 문제가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchKeyword, currentPage]); // 검색어와 페이지 번호가 변경될 때마다 데이터를 가져옴

  // 기업 선택
  const handleSelect = (company) => {
    if (
      selectedCompanies.length < 5 &&
      !selectedCompanies.some((c) => c.id === company.id)
    ) {
      onAddCompanies(company); // 부모 컴포넌트로 기업 추가
    }
  };

  // 기업 선택 해제
  const handleRemove = (companyId) => {
    onRemoveCompany(companyId); // 부모 컴포넌트로 선택 해제
  };

  const totalPages = Math.max(1, Math.ceil(totalCompanies / itemsPerPage));

  return (
    <div className="select-modal">
      <div className="select-modal-all-div">
        {/* 검색 입력 */}
        <div className="search-h1-input">
          <h1>비교할 기업 선택하기</h1>
          <SearchInput
            id="searchKeyword"
            name="searchKeyword"
            onChange={(value) => {
              setSearchKeyword(value);
              setCurrentPage(1); // 검색 시 페이지 초기화
            }}
          />
        </div>

        {/* 선택된 기업들 표시 */}
        {selectedCompanies.length > 0 && (
          <div className="selected-company">
            <p>선택한 기업 ({selectedCompanies.length}개)</p>
            <SelectedList
              selected={selectedCompanies.slice(0, 5)} // 최대 5개만 표시
              onRemove={handleRemove}
            />
          </div>
        )}

        {/* 검색 결과 및 기업 리스트 */}
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
                  : `전체 기업 리스트 (총 ${totalCompanies}개)`}{" "}
              </p>
              <SearchResultList
                results={searchResults} // 검색결과
                selectedCompanies={selectedCompanies}
                onSelect={handleSelect} // 선택 핸들러
              />
            </>
          )}
        </div>

        {/* 기업 선택 제한 메시지 */}
        {selectedCompanies.length >= 5 && (
          <p className="selection-limit-message">
            * 비교 가능한 기업은 최대 5개까지 선택 가능합니다.
          </p>
        )}

        {/* 페이지네이션 */}
        <div className="pagination-div">
          <Pagination
            currentPage={currentPage} // 현재 페이지
            totalPages={totalPages} // 총 페이지 수
            onPageChange={setCurrentPage} // 페이지 변경시 상태 업데이트
          />
        </div>
      </div>
    </div>
  );
};

export default CompanySelection;
