import React, { useState, useEffect } from "react";
import { apiRouter } from "../../api/allApiService.js";
import SearchResultList from "./SearchResultList/index.jsx";
import SelectedList from "./SelectedList/index.jsx";
import SearchInput from "../Search/index.jsx";
import Pagination from "./PaginationCorrection/index.jsx";
import "./index.css";

const CompanySelection = () => {
  const [searchKeyword, setSearchKeyword] = useState(""); // 초기 값 빈 문자열
  const [searchResults, setSearchResults] = useState([]); // 검색결과 저장 초기 값 빈 배열
  const [selectedCompanies, setSelectedCompanies] = useState([]); //선택한 기업 저장 초기값 빈배열 5개까지 저장할 수 있도록 로직짜기
  const [currentPage, setCurrentPage] = useState(1); // 현재 보고 있는 페이지 번호 초기 값 (1페이지부터 보이게)
  const itemsPerPage = 10; // 1페이지 당 표시할 기업 개수
  const [totalCompanies, setTotalCompanies] = useState(0); // 전체기업 수 ()안에 있는 토탈 개수 저장 검색 결과에 따라서 동적으로
  const [isLoading, setIsLoading] = useState(false); // 데이터를 가져오는 동안 로딩 중 표시 데이터를 가져왔을때는 false로 바뀜
  const [error, setError] = useState(null); // 오류 메시지 저장

  useEffect(() => {
    // 검색어, 페이지번호, 선택 기업수가 변경될때 데이터를 가져오게 끔
    const fetchData = async () => {
      setIsLoading(true); //데이터를 가져오는 동안 로딩 상태를 true로 설정
      setError(null); // 데이터를 새로 가져오기 전에 오류 상태를 초기화
      const offset = (currentPage - 1) * itemsPerPage; // (현재 보고있는 페이지 - 1) * 10 인덱싱 규율에 따르고 페이지의 시작점을 계산

      try {
        let response;
        if (!searchKeyword.trim()) {
          // 검색어가 비었을때 (전체기업 리스트)를 가져옴
          response = await apiRouter.getAllStartupsList({
            offset,
            limit: itemsPerPage,
          });
        } else {
          response = await apiRouter.getSearchStartupsList({
            // 검색어가 입력되면 (검색 결과 데이터)를 가져옴
            searchKeyword,
            offset,
            limit: itemsPerPage,
          });
        }

        const { startups, totalStartups } = response; // 페이지네이션 핸들러 에서 startups와 totalStartups 데이터 값을
        //받아온다

        if (!Array.isArray(startups)) {
          throw new Error("API 응답 데이터가 배열이 아닙니다.");
        }

        const maxDisplay = itemsPerPage - Math.min(5, selectedCompanies.length); // 선택한 기업에 따른 최대 표시 개수 계산
        setSearchResults(startups.slice(0, maxDisplay));
        setTotalCompanies(totalStartups || startups.length); // 전체 기업 수 업데이트
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        setError("데이터를 불러오는 중 문제가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchKeyword, currentPage, selectedCompanies.length]); // 검색어, 페이지, 선택한 기업 수 변경 시 데이터 로드

  const handleSelect = (company) => {
    if (selectedCompanies.length >= 5) return; // 최대 5개까지 선택 가능
    if (!selectedCompanies.some((c) => c.id === company.id)) {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const handleRemove = (id) => {
    setSelectedCompanies(selectedCompanies.filter((c) => c.id !== id)); // 선택한 기업 제거
  };

  // 총 페이지 수 계산 (최소 1페이지 보장) 페이지네이션 핸들러에서 써줬는데 써준 이유
  //(->서버 응답에 의존하지 않고 안전성을 보장
  //검색이나 필터링과 같이 동적으로 변하는 데이터에 대응
  //UI 업데이트를 더 빠르게 처리하고, 사용자 경험을 개선
  //서버가 페이지네이션 정보를 포함하지 않을 경우를 대비)
  const totalPages = Math.max(1, Math.ceil(totalCompanies / itemsPerPage));

  return (
    <div className="select-modal">
      <div className="select-modal-all-div">
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

        {selectedCompanies.length > 0 && (
          <div className="selected-company">
            <p>선택한 기업 ({selectedCompanies.length}개)</p>
            <SelectedList
              selected={selectedCompanies.slice(0, 5)} // 최대 5개만 표시
              onRemove={handleRemove}
            />
          </div>
        )}

        <div className="company-list">
          {isLoading ? (
            <p>로딩 중...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : totalCompanies === 0 ? (
            <p>검색 결과가 없습니다.</p> // 검색 결과가 없을 때 메시지 출력
          ) : (
            <>
              <p>
                {searchKeyword.trim()
                  ? `검색 결과 (총 ${totalCompanies}개)`
                  : `전체 기업 리스트 (총 ${totalCompanies}개)`}
              </p>
              <SearchResultList
                results={searchResults} // maxDisplay에 따라 필터링된 검색 결과 표시
                selectedCompanies={selectedCompanies}
                onSelect={handleSelect}
              />
            </>
          )}
        </div>

        {selectedCompanies.length >= 5 && (
          <p className="selection-limit-message">
            * 비교 가능한 기업은 최대 5개까지 선택 가능합니다.
          </p>
        )}

        <div className="pagination-div">
          <Pagination
            currentPage={currentPage} //현재 페이지 전달
            totalPages={totalPages} // 전체 페이지 수 전달
            onPageChange={setCurrentPage} // 페이지 변경시 상태 업데이트
          />
        </div>
      </div>
    </div>
  );
};

export default CompanySelection;
